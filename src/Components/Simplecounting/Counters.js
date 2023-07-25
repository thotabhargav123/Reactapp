import React from 'react'
import { useState } from 'react'
let buttonstyle = {
    width: "100px",
    padding: "10px 10px",
    backgroundcolor: "white"
    
}

export default function Counters() {
    let [indexs, setIndexs] = useState(0);
    const inc = () => {
       setIndexs(indexs+1)
    }
    const dec = () => {
        setIndexs(indexs-1)
    }
    return (
        <>

            <div className="container" style={{ width: "350px", display: "flex", justifyContent: "space-between" }}>
                <button style={buttonstyle} className='btn' onClick={inc}>incerase by 1</button>
                <button style={ buttonstyle} className='btn' onClick={dec}>decrease by 1</button>
            </div>
            <p id="Result">{indexs}</p>
        </>
    )
}
