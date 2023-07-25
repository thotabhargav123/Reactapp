import React from 'react'
import logo from './reactjs-icon.svg'
// import '../Reactfact.css' 
export default function ReactFact() {
    return (
        <div>
            <header>
                <nav className="reactFact">
                    <div className="title">
                       
                        <h2> <img src={logo} alt="" srcset="" />React Facts</h2>
                    </div>
                    <div className="sub-title">
                        <p>React Course - Project 1</p>
                    </div>
                </nav>
            </header>
            <main>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </div>
    )
}
