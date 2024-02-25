
import moment from 'moment-timezone';
//set according to indian time standard



export function findDate(){

  const date = new Date()
let dateArray = date.toUTCString().split(" ")
const formattedDate = dateArray.filter((item, index)=>{
  if(index <4){
    return item
  }
}).join(" ")

return formattedDate

}

export function currentTime(timezoneOffset) {
 
  let date = new Date()

  date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
 
  const targetCityTimeInHour =  (timezoneOffset/60) //divide by no of secs in one min to convert in min

  date.setMinutes(date.getMinutes() + targetCityTimeInHour)

  return date

}
