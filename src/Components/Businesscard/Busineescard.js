import React from 'react'
import {FaTwitterSquare,FaEnvelope,FaLinkedin,FaInstagramSquare,FaFacebookSquare,FaGithubSquare} from "react-icons/fa"
// import './style.css'
import profile from "../Businesscard/Rectangle 90.png"
export default function Busineescard() {
  return (
      <div>
          <div className="Option1">
              <div className='Container'>
                <div className="image">
                    <img src={profile} alt="" srcset="" />
                </div>
                <main>
                    <div className='info'>
                      <h1>Laura Smith</h1>
                      <p>Frontend Developer</p>
                      <p className='web'>laurasmith.website</p>
                    </div>
                    <div className="buttons">
                        <button className='Email'><FaEnvelope/>Email</button>
                        <button className='Linkedin'><FaLinkedin/>Linked in</button>
                    </div>
                    <section className="one">
                        <h2>About</h2>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    </section>
                    <section className='Two'>
                        <h2>Intrests</h2>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </section>
                </main>
                <footer>
                   <div className='logos'>
                    <p>
                         <FaTwitterSquare />
                    </p>
                    <p>
                         <FaFacebookSquare />
                    </p>
                     <p>
                        <FaInstagramSquare />
                     </p>
                     <p>
                        <FaGithubSquare/>
                     </p>
                   </div>
                    
                </footer>
              </div>
          </div>
    </div>
  )
}
