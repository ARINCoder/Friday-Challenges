import { useState, useEffect } from 'react'
import './App.css'
import SearchComponent from './Components/SearchComponent/SearchComponent.jsx'
import { getCurrentWeatherData } from '../src/API/Api.js'
import CurrentWeather from "../src/Components/CurrentDayWeatherComponent/CurrentWeather.jsx"
import DailyWeather from '../src/Components/DailyWeatherComponent/DailyWeather.jsx'


function App() {
  const [searchInput, setSearchText] = useState("");
  const [currentCity, setCurrentCity] = useState("Kisumu");
  const [currentWeather, setCurrentWeather] = useState({
    list: [
      {
        dt: '',
        dt_txt: '', 
        main : { temp: 0 },
        weather: [{ icon: '', main: '', description: '' }],
    }
    ]
  });

  function handleChange(event) {
    setSearchText(event.target.value);
  };
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setCurrentCity(searchInput);
    }
  };
  useEffect(() => {
    getCurrentWeatherData(currentCity).then((data) => {
      setCurrentWeather(data);
    });
  }, [currentCity]);

  return (
    <div className="app">
      <SearchComponent
        searchText={searchInput}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <div className="main-component">
        <>
          <CurrentWeather
            currentWeather={currentWeather}
            currentCity={currentCity}
          />
          <DailyWeather currentWeather={currentWeather} />
        </>
      </div>
    </div>
  );
}

export default App

