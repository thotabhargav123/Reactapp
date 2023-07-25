import React from 'react'

const Location = ({time}) => {
  return (
      <div className="locationbox">
      <div className="location">{ `${time.name} ${time.symbol}`}</div>
          <div className="date">{`${time.day} ${time.date} ${time.month} ${time.year}`}</div>
    </div>
  )
}

export default Location