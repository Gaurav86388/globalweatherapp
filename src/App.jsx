import { useState, useEffect } from 'react'
import "./scss/styles.scss"

import Searchbar from './components/Searchbar';
import Display from './components/Display';


const API_KEY = "d5cd777a1662d103b3db6ea74aad9bb3"

function App() {

  const [location, setLocation] = useState("dibrugarh")
  const [weatherData, setWeatherData] = useState({
    cityname: "",
    weather: "",
    description: "",
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
            return {...prevValue, cityname: data.name, weather: data.weather[0].main,
                      description: data.weather[0].description, icon: data.weather[0].icon,
                      temp: data.main.temp, maxTemp: data.main.temp_max,
                      minTemp: data.main.temp_min, feelsLike: data.main.feels_like, sunrise: data.sys.sunrise, 
                      sunset: data.sys.sunset, visibility: data.visibility, windspeed: data.wind.speed      
          
        }})

        })
        .catch(e=>console.error(e))     
    }

    function getGeoLocation(){
      if(navigator.geolocation){

          navigator.geolocation.getCurrentPosition((location)=>{
            latitude = location.coords.latitude;
            longitude = location.coords.longitude

            return getWeatherDetails(latitude, longitude)
          })
      }
      else{
        console.log("Geolocation is not supported by this browser.")
      }
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
  </>
      
 
  )
}

export default App
