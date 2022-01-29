import WeatherItem from './WeatherItem';

var WeatherItems = (props) => {

  console.log(props.weatherList.filter((day, index) => {
    return index % 8 === 0;
  }))

  return ((props.weatherList.filter((day, index) => {
    return index % 8 === 0;
  })).map((filteredDay, index) => {
       return <WeatherItem key={index} currentWeather={filteredDay}/>;
    }
      ))
  }


export default WeatherItems;