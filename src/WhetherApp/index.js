import React, { useState } from 'react';
import SearchCity from './searchCity';
import WheatherData from './wheatherData';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null);
      
  const handleSubmit = (e) => {
    e.preventDefault();
    searchWeather(city);
    setCity('');
  }

  const searchWeather = async (city) => {
    setData(null);
    setError(null);

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const headers = {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com', // Replace with your API host
      'x-rapidapi-key': 'e8ab07242fmsh8519bcf95bdc6f8p10524fjsneca48ca7217a' // Replace with your actual API key
    };

    try {
      const response = await axios.get(url, { headers });
      setData(response.data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching weather data:", err);
    }
  }

  return (
    <>
      <h1>WeatherApp</h1>
      <SearchCity SearchWhether={handleSubmit} city={city} setCity={setCity}/> 
      {data && <WheatherData data={data}/>}
      {error && <div>Error: {error}</div>}
    </>
  )
}

export default WeatherApp;
