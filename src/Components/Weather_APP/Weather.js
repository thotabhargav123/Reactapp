import React from 'react'

const Weather = ({temp,climate}) => {
  return (
      <div className="weatherbox">
          <div className="temp">{temp}°c</div>
          <div className="weathertype">
              {climate}
          </div>
    </div>
  )
}

export default Weather