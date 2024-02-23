import moment from "moment/moment"

//set according to indian time standard

export default function FindTime(timestamp){

    const time = moment.unix(timestamp).local()

    let hour = time.hour() + 5
    let minutes = time.minutes() + 30
    
    if(minutes >= 60){
      hour += 1;
      minutes = minutes % 60
      
    
    }
    
      if(minutes < 10){
      
      minutes = "0" + minutes.toString()
      
    }
    
    
    let dateString = ""
    if(hour > 12){
      
      hour = hour - 12;
      dateString = hour.toString() + ":" + minutes.toString() + "P.M"
      
    }
    else{
      dateString = hour.toString() + ":" + minutes.toString() + "A.M"
    }
    

        return dateString
   
}

