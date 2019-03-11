<?php

class AgencyAnalyticsDemo {

    function __construct($url) {
        $curled_page = $this->curl_page($url);
        $array_of_words = $this->get_text($curled_page['html']);
        $this->page_load_time = $curled_page['page_load_time'];
        $this->page_size = $curled_page['page_size'];
        $this->title_length = $this->get_title_length($curled_page['html']);
        $all_assets_and_links = $this->get_all_assets_and_links($curled_page['html']);
//        echo '<pre>'.print_r($all_assets_and_links, true).'</pre>';
        $this->urls = $this->split_into_links_assets_and_others($all_assets_and_links);
        $this->word_count = $this->get_word_count($array_of_words);
        $this->most_used_words_5 = $this->get_5_most_used_words($array_of_words);
    }

    function curl_page($url) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $out = [];
        $out['html'] = curl_exec($ch);
        $out['page_load_time'] = curl_getinfo($ch, CURLINFO_TOTAL_TIME);
        $out['page_size'] = curl_getinfo($ch, CURLINFO_SIZE_DOWNLOAD);
        curl_close($ch);
        return $out;
    }

    function get_text($html) {
        $array_of_nodeValue = [];
        $html = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', "", $html);
        $dom = new DOMDocument;
        @$dom->loadHTML($html);
        $tags = $dom->getElementsByTagName('*');
        foreach ($tags as $tag) {
            $value = '';
            $value = $tag->nodeValue;
            if ($value != '') {
                $array_of_nodeValue[] = trim($value);
            }
        }
        $text = implode(' ', $array_of_nodeValue);
        $text = strtolower($text);
        $text = preg_replace('/\W/',' ', $text);
        $text = preg_replace('/[0-9]/',' ', $text);
        $text = preg_replace('/\s\s+/', ' ', $text);
        $array_of_worrds = explode(' ', $text);
        sort($array_of_worrds);
        return $array_of_worrds;
    }

    function get_title_length($html) {
        $res = preg_match("/<title>(.*)<\/title>/siU", $html, $title_matches);
        if (!$res) {
            return null;
        }
        $title = preg_replace('/\s+/', ' ', $title_matches[1]);
        $title = trim($title);
        return strlen($title);
    }

    function get_all_assets_and_links($html){
        $array_of_nodeValue = [];
        $dom = new DOMDocument;
        @$dom->loadHTML($html);
        $tags = $dom->getElementsByTagName('*');
        $attributes_to_check = ["href", "src", "style"];
        foreach ($tags as $tag) {
            foreach ($attributes_to_check as $attribute) {
                $value = '';
                $value = $tag->getAttribute($attribute);
                if($value != '' && strpos($value, '/') != -1){
                    if($attribute == "style" && strpos($value, 'background-image:') != -1){
                        $value = str_replace("background-image: url(","", $value);
                        $value = str_replace(");","", $value);
                    }
                    $array_of_nodeValue[] = trim($value);
                }
            }
        }
        $out = array_unique($array_of_nodeValue);
        sort($out);
        return $out;
    }

    function split_into_links_assets_and_others($all_assets_and_links){
        $out = ["links" => [], "images" => [], "others" => [],];
        foreach ($all_assets_and_links as $url) {
            if (preg_match('/\.(jpg|png|jpeg|svg|ico)(\?.*)?$/', $url)) {
                $out["images"][] = $url;
            }
            else if (preg_match('/\.(js|css|json)(\?.*)?$/', $url)) {
                $out["others"][] = $url;
            }else{
                $out["links"][] = $url;
            }
        }

        $out['links'] = $this->split_into_internal_external($out['links']);
        $out['images'] = $this->split_into_internal_external($out['images']);
        $out['others'] = $this->split_into_internal_external($out['others']);

        return $out;
    }

    function split_into_internal_external($input_array){
        $out = ["internal" => [], "external" => []];
        foreach ($input_array as $item) {
            if (preg_match('/^(https?).*/', $item)) {
                $out['external'][] = $item;
            } else {
                $out['internal'][] = $item;
            }
        }
        return $out;
    }

    function get_word_count($array_of_words) {
        return sizeof($array_of_words);
    }

    function get_5_most_used_words($array_of_words) {
        $hashed_array_of_words = [];
        foreach ($array_of_words as $key => $word) {
            if (!$hashed_array_of_words[$word]) {
                $hashed_array_of_words[$word] = 1;
            } else {
                $hashed_array_of_words[$word]++;
            }
        }
        arsort($hashed_array_of_words);
        $first_5_array_of_words = array_slice($hashed_array_of_words, 0, 5);
        $out = [];
        foreach ($first_5_array_of_words as $word => $count) {
            $out[] = ["word" => $word, "count" => $count];
        }
        return $out;
    }

}

function write_json_to_file($json){
    $fp = fopen('AgencyAnalytics.json', 'w');
    fwrite($fp, $json);
    fclose($fp);
}


$url = "https://agencyanalytics.com/";
$AgencyAnalyticsDemo_json = new AgencyAnalyticsDemo($url);
$AgencyAnalyticsDemo_encided = json_encode($AgencyAnalyticsDemo_json);
write_json_to_file($AgencyAnalyticsDemo_encided);
echo $AgencyAnalyticsDemo_encided;

?>