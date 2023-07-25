import React from 'react'
import Data from './MOCK_DATA.json'
import { useState } from 'react'
import '../Filtering/roo.css'
export default function Filterings() {
    let [searchterm, setSearchterm] = useState("")
    return (
        <>
            <div className='container'>
                <div className='mini'>
                    <input type="text" name="" id="tetxt" placeholder='Search...' onChange={function (event) {
                        console.log(event.target.value)
                        return setSearchterm(event.target.value)
                    }} />
                    {/* {
                        Data.filter(function (val) {
                            // console.log("The saerch termi is "+searchterm)
                            if (searchterm === "") {
                                return val
                            }
                            else if (val.first_name.toLowerCase().includes(searchterm.toLowerCase())) {
                                return val
                            }
                            return val
                        }).map((val, key) => {
                            return (<div className='user' key={key}>
                                <p>{val.first_name}</p>
                            </div>);
                        })
                    } */}
                    {Data.filter(function (val) {
                        if (searchterm === "") {
                            return val
                        }
                        else if (val.first_name.toLowerCase().includes(searchterm.toLowerCase())) {
                            return val
                        }
                        return val;
                    }).map(function(val, key){
                       return <div className='user'key={key}><p>{val.first_name}</p></div>
                    })
                    }
                </div>
            </div>
        </>
    )
}
