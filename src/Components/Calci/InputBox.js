import React from 'react'
import { evaluate } from 'mathjs'
export default function InputBox(props) {
    function HandleonChange(event) {
        props.SetResetInput(event.target.value)
    }
    function HandleOnkeyup(event) {
        if (event.key === 'Enter' || event.key === '=') {
            event.preventDefault()
            console.log(props.resetInput)
            let result = evaluate(props.resetInput)
            props.SetResetInput(result)
        }
    }
    return (
        <>
            <input id="result" type="text" className="screen" placeholder="0" value={props.resetInput} onChange={HandleonChange} onKeyDown={HandleOnkeyup} />
        </>
    )
}
