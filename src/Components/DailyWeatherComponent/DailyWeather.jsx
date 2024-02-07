import React from 'react'
import '../DailyWeatherComponent/DailyWeather.css'


const getDay = (dt_txt) => {
    let dayNumber = new Date(dt_txt).getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNumber];
};

const DailyWeather = ({ currentWeather }) => {

    const daysOnlyWeatherList = currentWeather.list.filter((item) => {
        let day = new Date(item.dt_txt);
        return (day.getHours() === 0);
      });
    const dailyWeatherList = daysOnlyWeatherList.slice(1, 5);
    return (
        <div className="daily-weather-list">
            {dailyWeatherList.map(
                ({
                    dt,
                    dt_txt, 
                    main : { temp },
                    weather: [{ icon, main, description }],
                }) => {
                    return (
                        <div className="list-item" >
                            <p>{getDay(dt_txt)}</p>
                            <img src={`../public/images/${icon}.svg`} alt="icon" />
                            <p>{Math.trunc(temp - 273)}&#176;C</p>
                        </div>
                    );
                }
            )}
        </div>
    );

}

export default DailyWeather