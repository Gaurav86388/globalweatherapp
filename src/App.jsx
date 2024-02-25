import { useState, useEffect } from 'react'
import "./scss/styles.scss"

import Searchbar from './components/Searchbar';
import Display from './components/Display';
import Forecast from './components/Forecast';
import { currentTime } from './Time';


const API_KEY = "d5cd777a1662d103b3db6ea74aad9bb3"

function App() {

  const [clock, setClock] = useState()
  const [location, setLocation] = useState("Dibrugarh")
  const [forecast, setForecast] = useState([])
  const [weatherData, setWeatherData] = useState({
    cityname: "",
    weather: "",
    description: "",
    state: "",
    temp: null,
    maxTemp: null,
    minTemp: null,
    feelsLike: null,
    pressure: null,
    humidity: null,
    visibility: null,
    windspeed: null,
    sunrise: null,
    sunset: null,
    timezone: null,

  });

  useEffect(()=>{
    let latitude, longitude = 0

    function getWeatherDetails(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
         
         console.log(data)
         setWeatherData(prevValue=>{
            return {...prevValue, weather: data.weather[0].main,
                      description: data.weather[0].description, 
                      temp: data.main.temp, maxTemp: data.main.temp_max,
                      minTemp: data.main.temp_min, feelsLike: data.main.feels_like, pressure: data.main.pressure, 
                      humidity: data.main.humidity, visibility: data.visibility, windspeed: data.wind.speed,
                      sunrise: data.sys.sunrise, sunset: data.sys.sunset, timezone: data.timezone      
          
        }})

        })
        .catch(e=>console.error(e))     
    }

    function getGeoLocation(){
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`)
      .then(res=>res.json())
      .then(data=>{

        

        latitude = data[0].lat
        longitude = data[0].lon
        setWeatherData(prev=>({...prev, state: data[0].state, cityname: data[0].name }))
        getWeatherDetails(latitude, longitude)
        getForecastDetails(latitude, longitude)

      })
      .catch(e=>console.error(e))
    }

    function getForecastDetails(latitude, longitude){

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
      .then(res=>res.json())
      .then(data=>{
        let formattedForecast = data.list.filter((item, index)=>{
          if(index >1 && index < 8){
              return item
          }

          
      })
      setForecast(formattedForecast)
      })
      .catch(e=>console.error(e))
      
    }
    
    getGeoLocation()
    

  }, [location])

function handleLocation(cityname){
  setLocation(cityname)

}
  

function Clock(){

const [currentTimezone, setCurrentTimezone] = useState(weatherData.timezone)
  /* useEffect(()=>{
    
    const clocktime = setInterval(()=>{
      const targetCityTime = currentTime(weatherData.timezone)
      setClock(targetCityTime.toLocaleTimeString())
    }, 1000)

    const checktimezone = setInterval(()=>{

      if(currentTimezone !== weatherData.timezone){
        clearInterval(clocktime)
        setCurrentTimezone(weatherData.timezone)
        clearInterval(checktimezone)
      }
      
    }, 500)
    
    
  
    }, [weatherData.timezone]) */


  return <h4 style={{marginTop: "20px",  right: "15px",
  color:"aliceblue", fontWeight: "400", fontSize: "32px", width: "auto", 
  position: "absolute", top: "73px", left: "65px"}}>{clock}</h4>

}

  return (
  <>
  
  <Searchbar handleOnButtonClick = {handleLocation}/>
  <Clock />

  <Display weatherData = {weatherData} clock={clock}/>
  
  <ul style={{display: "flex", justifyContent: "space-between"}}> 
        {forecast.map((item, index)=>{

      return <li key={index}><Forecast forecast = {item}/></li>
      })}  
  </ul>

  
  </>
      
 
  )
}

export default App
