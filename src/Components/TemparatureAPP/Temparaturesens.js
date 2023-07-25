import React from 'react'
import './styling.css'
import { useState } from 'react'
export default function Temparaturesens() {
    let [temparature, setTemparature] = useState(15)
    let [temparatureColor, setTemparatureColor] = useState('cold')
    function inctemp() {
        console.log("Hii")
        let newtemp = temparature + 1;
        if (newtemp > 15 && newtemp < 30) {
            setTemparatureColor('warm')
        }
        else if (newtemp >= 30) {
            setTemparatureColor('veryhot')
        }
        else if (newtemp <= 15 && newtemp >= 7) {
            setTemparatureColor("cold")
        }
        else if (newtemp < 7) {
            setTemparatureColor("verycold")
        }
        setTemparature(newtemp)
    }
    function dectemp() {
        console.log("Bye")
        let newtemp = temparature - 1;
        if (newtemp > 15 && newtemp < 30) {
            setTemparatureColor('warm')
        }
        else if (newtemp >= 30) {
            setTemparatureColor('veryhot')
        }
        else if (newtemp <= 15 && newtemp >= 7) {
            setTemparatureColor("cold")
        }
        else if (newtemp < 7) {
            setTemparatureColor("verycold")
        }
        setTemparature(newtemp)
    }
    return (
        <div>
            <div className={`container`}>
                <div className={`bigcircle ${temparatureColor}`}><p>{temparature}&deg;c</p></div>
                <div className="controls">
                    <div className="smallcircle" onClick={inctemp}><p>+</p></div>
                    <div className="smallcircle" onClick={dectemp}><p>-</p></div>
                </div>
            </div>
        </div>
    )
}
