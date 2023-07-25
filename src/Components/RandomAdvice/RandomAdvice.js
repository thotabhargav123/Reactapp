import React, { useState } from 'react'
import './RandomAdvice.css'
const RandomAdvice = () => {
    let [advice, setAdvice] = useState("Dont believe in Advice believe in you and be wise");
    function loadadvices() {
        let url = `https://api.adviceslip.com/advice`
        fetch(url).then(function (response) {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then(function (data) {
            console.log(data);
            givenewadvice(data.slip.advice);
        }).catch(function (err) {
            document.getElementById("adv").innerHTML = err;
            console.log(err);
        })
    }
    function givenewadvice(data) {

        setAdvice(data);
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <h1 className="advice" id='adv'>{advice}</h1>
                    <button className="btn" onClick={loadadvices}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default RandomAdvice