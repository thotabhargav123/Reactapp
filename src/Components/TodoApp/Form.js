import React from 'react'

export default function Form(props) {
    function HandleOnChange(event) {
        // console.log(event)
        props.setInputValue(event.target.value)
    }
    function HandleOnClick(event) {
        event.preventDefault()
        props.setTodoArray([...props.todoArray, { todotext: props.inputValue, isCompleted: false, id: Math.random() * 1000 }
        ])
        props.setInputValue("")
    }
    // console.log(props.todoArray)
    function HandleFilter(event) {
        props.setFiltervalue(event.target.value)
    }
    return (
        <>
            <form action="">
                <input type="text" name="" id="" className='Todoinput' onChange={HandleOnChange} value={props.inputValue} />
                <button className="todo-button" type="submit" onClick={HandleOnClick}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="" id="Filter" onChange={HandleFilter}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incompelte">Incomplete</option>
                    </select>
                </div>
            </form>
        </>
    )
}
