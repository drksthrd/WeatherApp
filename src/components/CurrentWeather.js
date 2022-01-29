import WeatherItem from './WeatherItem';
import getTempInF from '../lib/getTempInF';

const CurrentWeather = (props) => {
  console.log('props*: ', props);

  if (props.currentWeather.main) {
    var humidity = props.currentWeather.main.humidity;
    var pressure = props.currentWeather.main.pressure;
    var temp_max = getTempInF(props.currentWeather.main.temp_max).toFixed(1);
    var temp_min = getTempInF(props.currentWeather.main.temp_min).toFixed(1);
  }
  if (props.currentWeather.weather) {
    var description = props.currentWeather.weather[0].description;
  }
  if (props.currentWeather.wind) {
    var speed = props.currentWeather.wind.speed;
    var deg = props.currentWeather.wind.deg;
  }


  return (
  <div className="current-weather">
    <div className="current-weather-component">
      <WeatherItem currentWeather={props.currentWeather}/>
    </div>
    <div className="current-weather-data">
      <div className="data">
        {temp_max && <p><span>Temp:  </span> {temp_min}  /  {temp_max} °F</p>}
      </div>
      <div className="data">
        {humidity && <p><span>Humidity:  </span> {humidity}%</p>}
      </div>
      <div className="data">
        {pressure && <p><span>Pressure:  </span> {pressure} mBar</p>}
      </div>
      <div className="data">
        {speed && <p><span>Wind: </span>  {speed} mph at {deg}°</p>}
      </div>
      <div className="data">
        {description && <p><span>Description: </span>{description}</p>}
      </div>
    </div>
  </div>
)};

export default CurrentWeather;