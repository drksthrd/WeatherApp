import getWeatherData from '../lib/getOpenWeatherData.js';

const WeatherHeader = (props) => {

  const onInputChange = (event) => {
    var zipCode = event.target.value;
    if (zipCode.length === 5) {
      getWeatherData(zipCode)
      .then((result) => {
        props.updateWeather(result.data);
      });
    } else {
      // props.updateWeather();
    }
  }
  return (
  <div className="weather-header">
    <h2>{ props.city && (<span>{props.city}'s</span>)} Weather</h2>
    <div>
      <input onChange={onInputChange} type="text"></input>
    </div>
  </div>
  );
}

export default WeatherHeader;
