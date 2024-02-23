import { useState, useEffect } from 'react'
import "./scss/styles.scss"

import Searchbar from './components/Searchbar';
import Display from './components/Display';
import Forecast from './components/Forecast';


const API_KEY = "d5cd777a1662d103b3db6ea74aad9bb3"

function App() {

  const [location, setLocation] = useState("London")
  const [forecast, setForecast] = useState([])
  const [weatherData, setWeatherData] = useState({
    cityname: "",
    weather: "",
    description: "",
    state: "",
    icon: "",
    temp: null,
    maxTemp: null,
    minTemp: null,
    feelsLike: null,
    sunrise: null,
    sunset: null,
    visibility: null,
    windspeed: null

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
                      description: data.weather[0].description, icon: data.weather[0].icon,
                      temp: data.main.temp, maxTemp: data.main.temp_max,
                      minTemp: data.main.temp_min, feelsLike: data.main.feels_like, sunrise: data.sys.sunrise, 
                      sunset: data.sys.sunset, visibility: data.visibility, windspeed: data.wind.speed      
          
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

  return (
  <>
  <Searchbar handleOnButtonClick = {handleLocation}/>
  <Display weatherData = {weatherData} />
  
  <ul style={{display: "flex", justifyContent: "space-between"}}> 
        {forecast.map((item, index)=>{

      return <li key={index}><Forecast forecast = {item}/></li>
      })}  
  </ul>

  
  </>
      
 
  )
}

export default App
