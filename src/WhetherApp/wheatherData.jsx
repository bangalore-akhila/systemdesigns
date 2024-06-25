import React from 'react'

const WheatherData = ({data}) => {
  return (
    <div>
    {data ? <>
        <h2>{data?.location?.name}</h2>
    <p>Temperature: {data?.current?.temp_c}°C</p>
    <p>Weather: {data?.current?.condition?.text}</p></>
 :
 <>Loading</>   
 }
  </div>

  )
}

export default WheatherData