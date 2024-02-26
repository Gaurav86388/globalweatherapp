import React from 'react'

const cardStyle = {width: "48rem", height: "14rem", backgroundColor: 'rgba(255, 255, 255, 0.2)', border: "1px transparent",
display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}


const cardBodyStyle = {width: "100%", height: "100%",display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center",  color: 'rgba(255, 255, 255, 0.8)'}


const Forecast = ({forecast}) => {
    

    
    let day = forecast.dt_txt.split(" ")[0].split("-")
    day = day[2] +"."+ day[1]
    
    let title = forecast.weather[0].description


    let img_url = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
    let temp = forecast.main.temp

  return (
    <div className="bottom" style={{marginTop: "10.8rem"}}>


    <div className="card" style={{...cardStyle, width: "13rem"}}>
    <div className="card-body" style={{...cardBodyStyle}}>
      <h6>{day}</h6>
      <h6>{title} </h6>
      <img src={img_url} alt="weather image" style={{height: "62px", width: "70px"}}/>
      <p><span style={{fontSize: "16px"}}>{temp}° </span>c </p>

    </div>
  </div>
  </div>
  )
}

export default Forecast