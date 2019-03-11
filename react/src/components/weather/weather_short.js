import React, {Component} from 'react';
import WeatherTable from './weather_table';
import WeatherDefinitions from './Weather_tr_definitions';
import {AreaChart, XAxis, YAxis, Area} from 'recharts';

class WeatherShort extends Component {
    render() {
        return (
            <div className="weather_short weather_future_period">
                <div className="overflowWrap">
                    <div className="overflowAdjust">
                        <div className="charts">
                            <AreaChart key="s1" width={878} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" dataKey="Temperature" strokeDasharray="5 5" stroke="#c6bf01" fillOpacity={1} fill="url(#colorTc)" unit="&deg;"/>
                            </AreaChart>
                            <AreaChart key="s2" width={878} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" dataKey="FeelsLike" strokeDasharray="5 5" stroke="#facc40" fillOpacity={1} fill="url(#colorTc)" unit="&deg;"/>
                            </AreaChart>
                            <AreaChart key="s3" width={878} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="Humidity" stroke="#246F9C" fillOpacity={0.1} fill="url(#colorTc)" unit="%"/>
                            </AreaChart>
                            <AreaChart key="s4" width={878} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" dataKey="ChancePrecip" strokeDasharray="5 5" stroke="#00479C" fillOpacity={0.2} fill="url(#colorTc)" unit="%"/>
                            </AreaChart>
                            <AreaChart key="s5" width={878} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="Gust" stroke="#931E1E" fillOpacity={0.1} fill="url(#colorTc)" unit="km/h"/>
                            </AreaChart>
                            <AreaChart key="s6" width={878} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="Wind" stroke="#931E1E" fillOpacity={0.2} fill="url(#colorTc)" unit="km/h"/>
                            </AreaChart>
                        </div>
                        <WeatherTable
                            data={this.props.data} th="stperiodforcurrent_alt"
                            td={["icon", "it", "t", "f", "ChancePrecip", "Humidity", "wg", "w"]}
                            tdFirst={["", "Conditions", "Temperature", "Feels Like", "Chance of Precipitation", "Humidity", "Gust", "Wind"]}
                        />
                    </div>
                </div>
                <WeatherDefinitions
                    data={["Temperature ( ° )", "Feels Like ( ° )", "Chance of ( % ) Precipitation", "Humidity ( % )", "Gust ( km/h )", "Wind ( km/h )"]}
                />
            </div>
        );
    }
}

export default WeatherShort;