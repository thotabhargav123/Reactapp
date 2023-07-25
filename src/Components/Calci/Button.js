import React from 'react'

export default function Button(props) {
    let sign=""
    let findOperatoe = (num) => {
        if (num === '+') {
            sign="plus"
        }
        else if (num === '-') {
            sign="minus"
        }
        else if (num === '*') {
            sign='mul'
        }
        else if (num === '/') {
            sign='div'
        }
        else if (num === '=') {
            sign='equal'
        }
        else {
            sign=""
        }
        return sign
    }
    return (
        <>
            <div className={`btn ${findOperatoe(props.number)}`} onClick={ props.HandleClick}>{props.number}</div>
        </>
    )
}
