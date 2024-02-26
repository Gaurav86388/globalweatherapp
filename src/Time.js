

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function currentTime(timezoneOffset) {
 
  let date = new Date()

  date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
 
  const targetCityTimeInHour =  (timezoneOffset/60) //divide by no of secs in one min to convert in min

  date.setMinutes(date.getMinutes() + targetCityTimeInHour)

  const currentday = weekdays[date.getDay()]
   const currentdate =  date.getDate().toLocaleString()
   const currentmonth =  months[date.getMonth()]

   const dateformat = currentday+ "," + " " + currentdate + " "+ currentmonth
 


  return {date: date, dateformat: dateformat}

}


