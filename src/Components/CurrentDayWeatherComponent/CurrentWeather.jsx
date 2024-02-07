import React from 'react'
import '../CurrentDayWeatherComponent/CurrentWeather.css'


const CurrentWeather = ({ currentCity, currentWeather }) => {
    const {
        main: { temp },
        weather: [{ icon, main, description }],
    } = currentWeather.list[0];

    return (
        <div className="day-weather">
            <img id='tdy-icon' src={`/public/images/${icon}.svg`} alt="" />
            <div className="info">
                <p>Today</p>
                <h2 className="city">{currentCity}</h2>
                <p>Temperature : {Math.trunc(temp - 273)}&#176;C</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CurrentWeather