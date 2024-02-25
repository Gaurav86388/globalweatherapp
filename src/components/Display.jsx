import {findDate, currentTime} from "../Time"

import {useEffect, useState} from "react"

const cardStyle = {width: "48rem", height: "14rem", backgroundColor: 'rgba(255, 255, 255, 0.25)', border: "1px transparent",
display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}


const cardBodyStyle = {width: "100%", height: "100%",display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center",  color: 'rgba(255, 255, 255, 0.8)', textAlign: "center"}

const cardTitle = {marginTop: "20px", position: "relative", right: "15px", color:"aliceblue", fontWeight: "400", fontSize: "32px", width: "auto"} 


export default function Display({weatherData}){
    
  const [time, setTime] = useState({
    targetcitytime: null,
    sunriseTime: null,
    sunsetTime: null,
  })

    useEffect(()=>{
      
      

      


    }, [weatherData.sunrise, weatherData.sunset])
 

    return <>
    <div className="top">
            <h3 style={cardTitle}>{weatherData.cityname}, {weatherData.state}</h3>
            <h5  style={{...cardTitle, fontWeight: "300", fontSize: "19px"}}>{findDate()}</h5>
    </div>


    <div className="middle" style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", width:"110rem", marginTop:"20px"}}>

              <div className="info" style={{width: "50%", display: "flex", gap: "20px", alignItems:"center"}}>
                  
                   
              
                    <div style={{width: "100px", color: "white"}}>
                    {console.log(weatherData)}
                    <img src={"src/assets/"+`${weatherData.weather}${time.targetcitytime > time.sunsetTime || time.targetcitytime < time.sunriseTime ? "-night": ""}`+".png"} className="card-img-top" alt="weather image" style={{height: "140px", width: "165px"}}/>
                          <h1><span style={{fontSize: "68px"}}>{(weatherData.temp - 273.15).toFixed(0)}°</span>C<br></br></h1>
                          <h4 style={{fontSize: "20px", opacity: "0.85", fontWeight: "300"}}>{weatherData.weather}</h4>
                          <h4 style={{fontSize: "20px", opacity: "0.85", fontWeight: "300", width: "200px"}}>{weatherData.description}</h4>
                          <h4 style={{fontSize: "19px", opacity: "0.80", fontWeight: "300", width: "200px", marginTop: "11px"}}>Visibility {weatherData.visibility/1000} km  </h4>
                        </div>
                          
                  
              </div>
              <div className="card mt-3" style={cardStyle}>

                  <div className="card-body" style={cardBodyStyle}>
                    
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"} }>

                          <p><span style={{fontSize: "18px"}}>{(weatherData.maxTemp- 273.15).toFixed(2)}° </span>c <br /> High</p>
                          <p><span style={{fontSize: "18px"}}>{(weatherData.feelsLike - 273.15).toFixed(2)}° </span>c <br />Feels Like</p>
                          <p>{weatherData.pressure} hPa <br /> Pressure</p>
                          
                      </div>

                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>

                        <p><span style={{fontSize: "18px"}}>{(weatherData.minTemp- 273.15).toFixed(2)}°</span> c <br /> Low</p>
                        <p> {weatherData.windspeed} m/s <br /> Wind Speed </p>
                          <p>{weatherData.humidity}% <br /> Humidity</p>
                            
                        </div>
                    </div>
              
                </div>
  </div>
    
       
</>
  }

  /*const sunsetUtcTime = new Date(weatherData.sunset * 1000);
const sunsetTime = currentTime(timezone, sunsetUtcTime);

const sunriseUtcTime = new Date(weatherData.sunrise * 1000);
const sunriseTime = currentTime(timezone, sunriseUtcTime); 
 <img src={"src/assets/"+`${weatherData.weather}${time.targetcitytime > time.sunsetTime || time.targetcitytime < time.sunriseTime ? "-night": ""}`+".png"} className="card-img-top" alt="weather image" style={{height: "140px", width: "165px"}}/>

*/