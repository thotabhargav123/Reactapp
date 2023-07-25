import React from 'react'

const Header = ({togglemode}) => {
    function darlmode() {
        togglemode();
    }
  return (
      <>
          <div className="header">
              <h1>Notes</h1>
              <button className='save' onClick={darlmode}>Toggle Mode</button>
          </div>
      </>
  )
}

export default Header