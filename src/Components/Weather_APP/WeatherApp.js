import React, { useState,useEffect } from 'react'
import InputCity from './InputCity'
import Location from './Location'
import Weather from './Weather'
import './WeatherApp.css'
const WeatherApp = () => {
    let [city, setCity] = useState("");
    let [temp, setTemp] = useState(0);
    let [climate, setClimate] = useState("");
    let [time, setTime] = useState({});
    let api = "18e0593c253c0e64d1768bae6855cd72"
    let base = `https://api.openweathermap.org/data/2.5/`
    let latitude
    let longitude

    // useEffect(() => {
    //     getLocation();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    


    function searchweather(event) {
        if (event.key === "Enter") {
            // console.log(city)
            loadweather();
            setCity("");
        }
    }
    function loadweather() {
        fetch(`${base}weather?q=${city}&units=metric&APPID=${api}`).then(function (response) {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then(function (data) {
            // console.log(data);
            setweather(data);
        }).catch(function (err) {
            console.log(err);
        })
    }
    function setweather(data) {
        setTemp(Math.round(data.main.temp))
        setClimate(data.weather[0].main)
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        let name = data.name
        let symbol = data.sys.country

        setTime({ day: day, month: month, year: year, date: date, name: name, symbol: symbol });
    }

    function getLocation() {
        if (navigator.geolocation) {
            // console.log('Getting location')
            navigator.geolocation.getCurrentPosition(UserLoacationWeather);
        } else {
            // x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function UserLoacationWeather(position) {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api}`
        console.log("userlocation Fetched");
        fetch(url).then(function (response) {

            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then(function (data) {
            // console.log(data);
            setweather(data);
        }).catch(function (err) {
        })
    }

    window.addEventListener('load', function () {
        getLocation();
    });
    return (
        <>

            <div className={(temp != "undefined") ? ((temp > 16) ? 'app warm' : 'app') : 'app'}>
                <div className="main">
                    <InputCity setCity={setCity} city={city} searchweather={searchweather} />
                    <div>
                        <Location time={time} />
                        <Weather temp={temp} climate={climate} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp