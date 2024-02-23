import {findTime, findDate} from "../Time"



const cardStyle = {width: "60rem", height: "35rem", backgroundColor: 'rgba(255, 255, 255, 0.3)', border: "1px transparent",
display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "Teal"}


const cardBodyStyle = {width: "100%", height: "80%",display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "flex-start"}
export default function Display({weatherData}){

const cardTitle = {marginTop: "20px", position: "relative", right: "400px", color:"aliceblue", fontWeight: "500", fontSize: "30px"} 

    return <>
    <h3 className="top" style={cardTitle}>{weatherData.cityname}, {weatherData.state}</h3>
    <h5 className="top" style={{...cardTitle, fontWeight: "300", fontSize: "19px"}}>{findDate()}</h5>

    <div className="middle" style={{display: "flex", flexDirection: "row"}}>

    <div className='weatherImage' style={{width: "45%", height: "45%", 
                    display: "flex",  alignItems: "center", justifyContent: "center"}}>

                              <img src={"src/assets/"+`${weatherData.weather}`+".png"} className="card-img-top" alt="weather image" style={{height: "100px", width: "110px"}}/>
                  
                    </div>
            <div style={{textAlign: "center", width: "100%"}}>
            <h1>{(weatherData.temp - 273.15).toFixed(0)}°C<br></br></h1>
            <h4>{weatherData.weather}</h4>

    </div>
    <div className="card mt-3" style={cardStyle}>

        <div className="card-body" style={cardBodyStyle}>
          
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap:"60px"}}>
                <p>Min Temp {(weatherData.minTemp- 273.15).toFixed(2)}°C</p>
                <p>Max Temp {(weatherData.maxTemp- 273.15).toFixed(2)}°C</p>
                <p>Feels Like {(weatherData.feelsLike - 273.15).toFixed(2)}°C</p>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap:"59px"}}>
                <p>Sunrise {findTime(weatherData.sunrise)}</p>
                <p>Sunset {findTime(weatherData.sunset)}</p>
                <p>WindSpeed {weatherData.windspeed} m/s</p>
            </div>
          </div>
    
      </div>
  </div>
    
    </>
  }