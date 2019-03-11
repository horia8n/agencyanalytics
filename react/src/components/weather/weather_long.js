import React, {Component} from 'react';
import WeatherTable from './weather_table';
import WeatherDefinitions from './Weather_tr_definitions';
import {AreaChart, XAxis, YAxis, Area} from 'recharts';

class WeatherLong extends Component {
    render() {
        return (
            <div className="weather_long weather_future_period">
                <div className="overflowWrap">
                    <div className="overflowAdjust">
                        <div className="charts">
                        <AreaChart key="l1" width={1370} height={60} data={this.props.data}>
                            <XAxis dataKey="0" stroke="#fff" />
                            <YAxis tick={{fontSize: 12}} stroke="#fff" />
                            <Area type="monotone" strokeDasharray="5 5" dataKey="TemperatureMax" stroke="#c6bf01" fillOpacity={0.2} fill="url(#colorTc)" unit="&deg;"/>
                        </AreaChart>
                        <AreaChart key="l2" width={1370} height={60} data={this.props.data}>
                            <XAxis dataKey="0" stroke="#fff" />
                            <YAxis tick={{fontSize: 12}} stroke="#fff" />
                            <Area type="monotone" strokeDasharray="5 5" dataKey="TemperatureMin" stroke="#c6bf01" fillOpacity={1} fill="url(#colorTc)" unit="&deg;"/>
                        </AreaChart>
                        <AreaChart key="l3" width={1370} height={60} data={this.props.data}>
                            <XAxis dataKey="0" stroke="#fff" />
                            <YAxis tick={{fontSize: 12}} stroke="#fff" />
                            <Area type="monotone" strokeDasharray="5 5" dataKey="ChancePrecip" stroke="#00479C" fillOpacity={0.2} fill="url(#colorTc)" unit="%"/>
                        </AreaChart>
                        <AreaChart key="l4" width={1370} height={60} data={this.props.data}>
                            <XAxis dataKey="0" stroke="#fff" />
                            <YAxis tick={{fontSize: 12}} stroke="#fff" />
                            <Area type="monotone" strokeDasharray="5 5" dataKey="Gust" stroke="#931E1E" fillOpacity={0.2} fill="url(#colorTc)" unit="km/h"/>
                        </AreaChart>
                        <AreaChart key="l5" width={1370} height={60} data={this.props.data}>
                            <XAxis dataKey="0" stroke="#fff" />
                            <YAxis tick={{fontSize: 12}} stroke="#fff" />
                            <Area type="monotone" strokeDasharray="5 5" dataKey="Wind" stroke="#931E1E" fillOpacity={0.1} fill="url(#colorTc)" unit="km/h"/>
                        </AreaChart>
                    </div>
                        <WeatherTable
                            data={this.props.data} th="WeekDay"
                            td={["icon", "it", "TemperatureMax", "TemperatureMin", "ChancePrecip", "Gust", "Wind"]}
                            tdFirst={["", "Conditions", "Minimum Temperature", "Maximum Temperature", "Chance of Precipitation", "Gust","Wind"]}
                        />
                    </div>
                </div>
                <WeatherDefinitions
                    data={["Maximum ( ° ) Temperature", "Minimum ( ° ) Temperature", "Chance of ( % ) Precipitation", "Gust ( km/h )","Wind ( km/h )"]}
                />
            </div>
        );
    }
}

export default WeatherLong;