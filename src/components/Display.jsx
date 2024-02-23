import FindTime from "../Time"



const cardStyle = {width: "60rem", height: "35rem", backgroundColor: 'rgba(255, 255, 255, 0.3)', border: "1px transparent",
display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}


const cardBodyStyle = {width: "100%", height: "80%",display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "flex-start"}
export default function Display({weatherData}){
    console.log(weatherData)

    

    return <div className="card mt-3" style={cardStyle}>

                <h4 className="card-title" style={{marginTop: "20px", textAlign: "center"}}>
                  {weatherData.cityname}
                  </h4>

        <div className="card-body" style={cardBodyStyle}>
          
         
                    <div className='weatherImage' style={{width: "45%", height: "45%", 
                    display: "flex",  alignItems: "center", justifyContent: "center"}}>

                              <img src={"src/assets/"+`${weatherData.weather}`+".png"} className="card-img-top" alt="weather image" style={{height: "180px", width: "220px"}}/>
                  
                    </div>
            <div className="card-text" style={{textAlign: "center", width: "100%"}}>
            <h1>{(weatherData.temp - 273.15).toFixed(0)}°C<br></br></h1>
            <h4>{weatherData.weather}</h4>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <p>Minimum Temp {(weatherData.minTemp- 273.15).toFixed(2)}°C</p>
                <p>Maximum Temp {(weatherData.maxTemp- 273.15).toFixed(2)}°C</p>
                <p>Feels Like {(weatherData.feelsLike - 273.15).toFixed(2)}°C</p>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <p>Sunrise {FindTime(weatherData.sunrise)}</p>
                <p>Sunset {FindTime(weatherData.sunset)}</p>
                <p>WindSpeed {weatherData.windspeed} m/s</p>
            </div>
          </div>
    
      </div>
  </div>
  }