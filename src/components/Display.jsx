import { currentTime } from "../Time";
import { useEffect, useState } from "react";

import feelsLikeImage from "../assets/feelslike.png"
import highTempImage from "../assets/high_temp.png"
import lowTempImage from "../assets/low_temp.png"
import pressureImage from "../assets/pressure.png"
import windspeedImage from "../assets/windspeed.png"
import humidityImage from "../assets/humidity.png"


const cardStyle = {
  width: "48rem",
  height: "14rem",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  border: "1px transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const cardBodyStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255, 255, 255, 0.8)",
  textAlign: "center",
};

const cardTitle = {
  marginTop: "20px",
  position: "relative",
  right: "15px",
  color: "aliceblue",
  fontWeight: "400",
  fontSize: "32px",
  width: "auto",
};

export default function Display({ weatherData }) {
  const [currentdate, setCurrentDate] = useState();

  const imageUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  useEffect(() => {
    setCurrentDate(() => {
      const date = currentTime(weatherData.timezone);
      return date.dateformat;
    });
  }, [weatherData.timezone]);

  return (
    <>
      <div className="top">
        <h3 style={cardTitle}>
          {weatherData.cityname}, {weatherData.state}
        </h3>
        <h5 style={{ ...cardTitle, fontWeight: "300", fontSize: "19px" }}>
          {currentdate}
        </h5>
      </div>

      <div
        className="middle"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "110rem",
          marginTop: "20px",
        }}
      >
        <div
          className="info"
          style={{
            width: "50%",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="weather image"
            style={{ height: "140px", width: "165px" }}
          />
          <div style={{ width: "100px", color: "white" }}>
            <h1>
              <span style={{ fontSize: "68px" }}>
                {(weatherData.temp - 273.15).toFixed(0)}°
              </span>
              C<br></br>
            </h1>

            <h4
              style={{
                fontSize: "20px",
                opacity: "0.85",
                fontWeight: "300",
                width: "200px",
              }}
            >
              {weatherData.description}
            </h4>
            <h4
              style={{
                fontSize: "19px",
                opacity: "0.80",
                fontWeight: "300",
                width: "200px",
                marginTop: "11px",
              }}
            >
              Visibility {weatherData.visibility / 1000} km
            </h4>
          </div>
        </div>
        <div className="card mt-3" style={cardStyle}>
          <div className="card-body" style={cardBodyStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                className="icon-details"
                style={{ display: "flex", width: "auto", gap: "5px" }}
              >
                <img
                  src={highTempImage}
                  alt="weather image"
                  style={{ height: "50px", width: "52px" }}
                />

                <p>
                  <span style={{ fontSize: "18px" }}>
                    {(weatherData.maxTemp - 273.15).toFixed(2)}°
                  </span>
                  c <br /> High
                </p>
              </div>

              <div
                className="icon-details"
                style={{ display: "flex", width: "auto", gap: "5px" }}
              >
                <img
                  src={feelsLikeImage}
                  alt="weather image"
                  style={{ height: "50px", width: "52px" }}
                />

                <p>
                  <span style={{ fontSize: "18px" }}>
                    {(weatherData.feelsLike - 273.15).toFixed(2)}°
                  </span>
                  c <br />
                  Feels Like
                </p>
              </div>

              <div
                className="icon-details"
                style={{ display: "flex", width: "auto", gap: "5px" }}
              >
                <img
                  src={pressureImage}
                  alt="weather image"
                  style={{ height: "50px", width: "52px" }}
                />

                <p>
                  {weatherData.pressure} hPa <br /> Pressure
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                className="icon-details"
                style={{ display: "flex", width: "auto", gap: "5px" }}
              >
                <img
                  src={lowTempImage}
                  alt="weather image"
                  style={{ height: "50px", width: "52px" }}
                />

                <p>
                  <span style={{ fontSize: "18px" }}>
                    {(weatherData.minTemp - 273.15).toFixed(2)}°
                  </span>{" "}
                  c <br /> Low
                </p>
              </div>

              <div
                className="icon-details"
                style={{ display: "flex", width: "auto", gap: "5px" }}
              >
                <img
                  src={windspeedImage}
                  alt="weather image"
                  style={{ height: "50px", width: "52px" }}
                />

                <p>
                  
                  {weatherData.windspeed} m/s <br /> Wind Speed
                </p>
              </div>

              <div
                className="icon-details"
                style={{ display: "flex", width: "auto", gap: "5px" }}
              >
                <img
                  src={humidityImage}
                  alt="weather image"
                  style={{ height: "50px", width: "52px" }}
                />

                <p>
                  {weatherData.humidity}% <br /> Humidity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


