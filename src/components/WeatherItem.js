import getTimeData from '../lib/getTimeData.js';
import getTempInF from '../lib/getTempInF.js';
import getWeatherImage from '../lib/getWeatherImage.js';

const WeatherItem = (props) => {
  if (Object.keys(props.currentWeather).length > 0) {
    var time = props.currentWeather.dt_txt;
    var dayOfWeek = getTimeData(time);
    var tempInK = props.currentWeather.main.temp;
    var tempInF = getTempInF(tempInK).toFixed(1);
    var description = props.currentWeather.weather[0].description;
    var imgSrc = getWeatherImage(description)
  }




  // console.log(props.currentWeather.weather[0].description);


  return (
    <div className="weather-item">
      <div className="day-name">
        <h3>{dayOfWeek}</h3>
      </div>
      <div className="temperature">
        <h3>{tempInF && `${tempInF} °F`}</h3>
      </div>
      <div className="weather-icon">
        { imgSrc && <img src={imgSrc} alt="weather icon"/>}
      </div>
      <div className="weather-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default WeatherItem;