import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherItems from './WeatherItems';
import CurrentWeather from './CurrentWeather';
import getWeatherData from '../lib/getOpenWeatherData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: {},
      weatherList: [],
      currentCity: ''
    }
  }

  componentDidMount() {
    getWeatherData('95405')
    .then(weatherData => {
      console.log('weatherData: ', weatherData);
      this.updateWeather(weatherData.data);
    })
  }

  updateWeather(weather) {
    if (!weather) {
      this.setState({ currentWeather: {}, weatherList: [], currentCity: ''});
    } else {
    this.setState({ weatherList: weather.list, currentWeather: weather.list[0], currentCity: weather.city.name});
  }
}

  render() {
    return (
      <div className="App">
        <header className="header">
          <div>
            <WeatherHeader city={this.state.currentCity} updateWeather={this.updateWeather.bind(this)}/>
          </div>
        </header>
        <div className="body">
          <CurrentWeather currentWeather={this.state.currentWeather}/>
        </div>
        <div className="footer">
          <WeatherItems weatherList={this.state.weatherList}/>
      </div>
      </div>
    );
  }

}

export default App;
