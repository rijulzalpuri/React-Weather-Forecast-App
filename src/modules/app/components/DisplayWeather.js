import React from 'react'

const DisplayWeather = (props) => {
    // console.log(props)
    if (props.data) {
        return (
            <div className="TableRight">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="4">
                                {props.data.description.split('!')[1]}
                            </th>
                        </tr>
                        <tr>
                            <th>Day</th>
                            <th>Condition</th>
                            <th>High</th>
                            <th>Low</th>
                        </tr>
                        {props.data.item.forecast.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.day}</td>
                                    <td>{item.text}</td>
                                    <td>{item.high}<sup>o</sup>F</td>
                                    <td>{item.low}<sup>o</sup>F</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (
            <div> </div>
        )
    }
}

export default DisplayWeather