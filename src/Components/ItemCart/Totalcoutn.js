import React from 'react'

function Totalcoutn({totalcount,reqcount}) {
  return (
    <div class="count">
      <div className='total'>Total:{totalcount}</div>
      <div className='total'>Required:{reqcount}</div>
    </div>
  )
}

export default Totalcoutn