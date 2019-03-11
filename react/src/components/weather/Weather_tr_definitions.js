import React, {Component} from 'react';

class WeatherDefinitions extends Component {
    render() {
        const trs = this.props.data.map((td, index) => {
            return <tr key={index}>
                <td>{td}</td>
            </tr>;
        });
        return (
            <div className="WeatherDefinitions">
                <table className="trDefinition">
                    <tbody>{trs}</tbody>
                </table>
            </div>
        );
    }
}

export default WeatherDefinitions;