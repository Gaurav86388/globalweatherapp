import React from 'react'

const cardStyle = {width: "48rem", height: "14rem", backgroundColor: 'rgba(255, 255, 255, 0.2)', border: "1px transparent",
display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}


const cardBodyStyle = {width: "100%", height: "100%",display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center",  color: 'rgba(255, 255, 255, 0.8)'}


const Forecast = ({forecast}) => {
    
    let day = forecast.dt_txt.split(" ")[0].split("-")
    day = day[2] +"."+ day[1]
    
    let time = forecast.dt_txt.split(" ")[1].split(":")[0]
    if(time > 12){
        time = "0"+ (time % 12).toString()+":00"  + " p.m"
    }
    else{
        time = time.toString()+ ":00"  + " a.m"
    }

    let img_url = forecast.weather[0].main
    let temp = forecast.main.temp

  return (
    <div className="bottom" style={{marginTop: "10rem"}}>


    <div className="card" style={{...cardStyle, width: "13rem"}}>
    <div className="card-body" style={{...cardBodyStyle}}>
      <h6>{day}</h6>
      <h7>{time} </h7>
      <img src={"src/assets/"+`${img_url}`+".png"} alt="weather image" style={{height: "32px", width: "43px"}}/>
      <p><span style={{fontSize: "16px"}}>{temp}° </span>c </p>

    </div>
  </div>
  </div>
  )
}

export default Forecast