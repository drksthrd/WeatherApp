var mapDescriptionToPic = {
  'thunderstorm with light rain': '11d',
  'thunderstorm with rain': '11d',
  'thunderstorm with heavy rain': '11d',
  'light thunderstorm': '11d',
  'thunderstorm': '11d',
  'heavy thunderstorm': '11d',
  'ragged thunderstorm': '11d',
  'thunderstorm with light drizzle': '11d',
  'thunderstorm with drizzle': '11d',
  'thunderstorm with heavy drizzle': '11d',
  'light intensity drizzle': '09d',
  'drizzle': '09d',
  'heavy intensity drizzle': '09d',
  'light intensity drizzle rain': '09d',
  'drizzle rain': '09d',
  'heavy intensity drizzle rain': '09d',
  'shower rain and drizzle': '09d',
  'heavy shower rain and drizzle': '09d',
  'shower drizzle': '09d',
  'light rain': '10d',
  'moderate rain': '10d',
  'heavy intensity rain': '10d',
  'very heavy rain': '10d',
  'extreme rain': '10d',
  'freezing rain': '10d',
  'light intensity shower rain': '10d',
  'shower rain': '10d',
  'heavy intensity shower rain': '10d',
  'ragged shower rain': '10d',
  'light snow': '13d',
  'Snow': '13d',
  'Heavy snow': '13d',
  'Sleet': '13d',
  'Light shower sleet': '13d',
  'Shower sleet': '13d',
  'Light rain and snow': '13d',
  'Rain and snow': '13d',
  'Light shower snow': '13d',
  'Shower snow': '13d',
  'Heavy shower snow': '13d',
  'mist': '50d',
  'Smoke': '50d',
  'Haze': '50d',
  'sand/ dust whirls': '50d',
  'fog': '50d',
  'sand': '50d',
  'dust': '50d',
  'volcanic ash': '50d',
  'squalls': '50d',
  'tornado': '50d',
  'clear sky': '01d',
  'few clouds': '02d',
  'scattered clouds': '03d',
  'broken clouds': '04d',
  'overcast clouds': '04d',
}

var getWeatherImageData = (weatherObj) => {
  var imageCode = mapDescriptionToPic[weatherObj];
  return `http://openweathermap.org/img/wn/${imageCode}@2x.png`
}

export default getWeatherImageData;