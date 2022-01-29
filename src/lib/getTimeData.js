var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var getTimeData = (timeData) => {
  var dateTimeObj = new Date(timeData);
  return weekDays[dateTimeObj.getDay()];
}

export default getTimeData;