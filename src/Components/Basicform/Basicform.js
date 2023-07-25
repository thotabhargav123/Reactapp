import React from 'react'
import '../Basicform/basic.css'
import { useState } from 'react'
export default function Basicform() {
    let [values, setvalues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    let [submission, setSubmission] = useState(false)
    let[validate,setValidate]=useState(false)
    function HandlefirstNameChange(event) {
        setvalues({ ...values, firstName: event.target.value })
    }
    function HandleLastNamechange(event) {
        setvalues({ ...values, lastName: event.target.value })
    }
    function HandleEmailChange(event) {
        setvalues({ ...values, email: event.target.value })
    }
    function HandleSubmission(event) {
        event.preventDefault()
        setSubmission(true)
        if (values.firstName !== "" && values.lastName !== "" && values.email !== "") {
            setValidate(true)
        }
    }
    return (
        <div className='main'>
            <div className="container">
                <form>
                    <input type="text" name="" id="FirstName" placeholder='First Name' value={values.firstName} onChange={HandlefirstNameChange} />
                    <p>{submission && !values.firstName?"Fill the FirstName first before submission":""}</p>
                    <input type="text" name="" id="LastName" placeholder='Last Name' value={values.lastName} onChange={HandleLastNamechange} />
                    <p>{submission && !values.lastName?"Fill the LastName first before submission":""}</p>
                    <input type="email" name="" id="email" placeholder='Email' value={values.email} onChange={HandleEmailChange} />
                    <p>{submission && !values.email?"Fill the Email first before submission":""}</p>
                    <button type="submit" onClick={HandleSubmission}>Register</button>
                </form>
            </div>
            <div className={`message ${submission && validate ? "show":""}`}>
                <p>Form is submitted suceesfully</p>
            </div>
        </div>
    )
}
