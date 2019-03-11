import React, {Component} from 'react';

class WeatherTable extends Component {
    render() {
        let prepareTH = this.props.data.map((period, index_th) => {
          return <th key={ index_th }>{ period[this.props.th] }</th>
        });
        const stationCondUrl = 'img/';
        let var_tr;
        let prepareTR = this.props.td.map((tr, index_tr) => {
            var_tr = tr;
            const row = this.props.data.map((period, index_td) => {
                if (var_tr === 'icon') {
                    const src = stationCondUrl + period[var_tr] + 'x.png';
                    return (
                        <td key={index_td} className="weather-td-icon">
                            <img src={ src } alt=""/>
                        </td>
                    );
                } else {
                    return <td className={'cel-'+tr} key={index_td}>{ period[var_tr] }</td>;
                }
            });
          return (<tr key={index_tr}>{ row }</tr>);
        });
        return (
            <table className="weather-table">
                <thead>
                    <tr>{ prepareTH }</tr>
                </thead>
                <tbody>{ prepareTR }</tbody>
            </table>
        );
    }
}

export default WeatherTable;