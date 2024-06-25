import React from 'react'

const SearchCity = ({SearchWhether, city, setCity}) => {
  const setCityValue = (e) => {
        setCity(e.target.value)
      }
  
  return (
    <div>
        <input type="search" value={city} placeholder='Enter City Name' onChange={(e)=>setCityValue(e) }/>
        <button onClick={(e)=>{SearchWhether(e)}}>Search</button>
    </div>
  )
}

export default SearchCity