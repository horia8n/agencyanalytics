import React, {Component} from 'react';
import WeatherTable from './weather_table';
import WeatherDefinitions from './Weather_tr_definitions';
import {AreaChart, XAxis, YAxis, Area} from 'recharts';

class WeatherHourly extends Component {
    render() {
        return (
            <div className="weather_hourly weather_future_period">
                <div className="overflowWrap">
                    <div className="overflowAdjust">
                        <div className="charts">
                            <AreaChart key="h1" width={2376} height={60} data={this.props.data}>
                                <XAxis dataKey="h1" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="Temperature" stroke="#c6bf01" fillOpacity={1} fill="url(#colorTc)" unit="&deg;"/>
                            </AreaChart>
                            <AreaChart key="h2" width={2376} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="FeelsLike" stroke="#facc40" fillOpacity={1} fill="url(#colorFc)" unit="&deg;"/>
                            </AreaChart>
                            <AreaChart key="h3" width={2376} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="ChancePrecip" stroke="#00479C" fillOpacity={0.2} fill="url(#colorFc)" unit="%"/>
                            </AreaChart>
                            <AreaChart key="h4" width={2376} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="CloudCoverage" stroke="#246F9C" fillOpacity={0.1} fill="url(#colorFc)" unit="%"/>
                            </AreaChart>
                            <AreaChart key="h5" width={2376} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="Gust" stroke="#931E1E" fillOpacity={0.1} fill="url(#colorFc)" unit="km/h"/>
                            </AreaChart>
                            <AreaChart key="h6" width={2376} height={60} data={this.props.data}>
                                <XAxis dataKey="0" stroke="#fff"/>
                                <YAxis tick={{fontSize: 12}} stroke="#fff"/>
                                <Area type="monotone" strokeDasharray="5 5" dataKey="Wind" stroke="#931E1E" fillOpacity={0.2} fill="url(#colorFc)" unit="km/h"/>
                            </AreaChart>
                        </div>
                        <WeatherTable
                            data={this.props.data}
                            th="hourC"
                            td={["icon", "it", "t", "f", "ChancePrecip", "CloudCoverage", "wg", "w"]}
                            tdFirst={["", "Conditions", "Temperature", "Feels Like", "Chance of Precipitation", "Cloud Coverage", "Gust", "Wind"]}
                        />
                    </div>
                </div>
                <WeatherDefinitions
                    data={["Temperature ( ° )", "Feels Like ( ° )", "Chance of ( % ) Precipitation", "Cloud  ( % ) Coverage", "Gust ( km/h )", "Wind ( km/h )"]}
                />
            </div>
        );
    }
}

export default WeatherHourly;