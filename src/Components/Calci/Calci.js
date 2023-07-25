import React from 'react'
import InputBox from './InputBox'
import Button from './Button'
import './clac.css'
import { useState } from 'react'
import { evaluate } from 'mathjs'
export default function Calci() {
    let [resetInput, SetResetInput] = useState("");
    function HandleClick(event) {
        if (event.target.innerHTML === 'c') {
            SetResetInput("")
        }
        else if (event.target.innerHTML === '=') {
            let res = evaluate(resetInput)
            SetResetInput(res)
        }
        else {
            SetResetInput(resetInput + event.target.innerHTML)
        }

    }

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <InputBox resetInput={resetInput} SetResetInput={SetResetInput} />
                    <Button number={1} HandleClick={HandleClick} />
                    <Button number={2} HandleClick={HandleClick} />
                    <Button number={3} HandleClick={HandleClick} />
                    <Button number={'+'} HandleClick={HandleClick} />
                    <Button number={4} HandleClick={HandleClick} />
                    <Button number={5} HandleClick={HandleClick} />
                    <Button number={6} HandleClick={HandleClick} />
                    <Button number={'-'} HandleClick={HandleClick} />
                    <Button number={7} HandleClick={HandleClick} />
                    <Button number={8} HandleClick={HandleClick} />
                    <Button number={9} HandleClick={HandleClick} />
                    <Button number={'*'} HandleClick={HandleClick} />
                    <Button number={'.'} HandleClick={HandleClick} />
                    <Button number={0} HandleClick={HandleClick} />
                    <Button number={'c'} HandleClick={HandleClick} />
                    <Button number={'/'} HandleClick={HandleClick} />
                    <Button number={'='} HandleClick={HandleClick} />
                </div>
            </div>
        </>
    )
}
