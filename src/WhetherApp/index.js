import React, { useState } from 'react';
import SearchCity from './searchCity';
import WheatherData from './wheatherData';
import axios from 'axios'

const WheatherApp = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState({}); 
    const [error, setError] = useState('');
      
    const handleSubmit = (e) => {
        e.preventDefault();
        SearchWhether(city);
        setCity('')
    }
    
const SearchWhether = async(city)=> {
    setData({})
    setError('')
const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const headers = {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com', // Replace with your API host
    'x-rapidapi-key': 'e8ab07242fmsh8519bcf95bdc6f8p10524fjsneca48ca7217a'      // Replace with your actual API key
  };
try {
const data = await axios.get(url, {headers});
setData(data?.data);
} catch(err) {
    setError(err)
console.log("error", err);
}
}

  return (
    <>
    <h1>WheatherApp</h1>
    <SearchCity SearchWhether={handleSubmit} city={city} setCity={setCity}/> 
    {Object.keys(data).length >0 && <WheatherData data={data}/> }
    {error && <div>{error.message}</div>}
    </>
  )
}

export default WheatherApp