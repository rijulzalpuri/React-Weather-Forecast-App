import React, { Component } from 'react'
import { GetWData } from './GetData'
import DisplayWeather from './DisplayWeather'
import DisplayMap from './DisplayMap'
import { Throttle } from './Throttle'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WeatherData: undefined,
      MapImage: undefined
    }
    this.InputChangeHandler = this.InputChangeHandler.bind(this)


  }
  InputChangeHandler(e) {
    var CheckVal = ''
    // Pass Time in Ms to set the Throttle default 200ms
    var ThrottleTime = 200
    //Checking if Result is Throttled or not and making API Call
    if (CheckVal = Throttle(ThrottleTime)) {
      GetWData(e.target.value).then(res => {
        this.setState({
          WeatherData: res.data.query.count > 0 ? res.data.query.results.channel : undefined
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="LocationInput">
          <h3 className="InlineStyle">Enter Location</h3>
          <input type="text" onChange={this.InputChangeHandler} />
          <h3>{this.state.WeatherData ? '' : 'No Data Found For Your Location'}</h3>
        </div>
        <div>
          <div className="Left">
            <DisplayMap data={this.state.WeatherData} />
          </div>
          <div className="Right">
            <DisplayWeather data={this.state.WeatherData} />
          </div>
        </div>
      </div>
    )
  }
};
