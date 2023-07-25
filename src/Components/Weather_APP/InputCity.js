import React from 'react'

const InputCity = ({ setCity, city, searchweather }) => {
    function HandleChange(event) {
        setCity(event.target.value)
    }

    function Handleclick(event) {
        searchweather(event);
    }
    return (

        <div className="inputarea">
            <input type="text" placeholder='Search...' className="SearchBox" onChange={HandleChange} onKeyUp={Handleclick} value={city} />
        </div>

    )
}

export default InputCity