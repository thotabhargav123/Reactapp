import React from 'react'

export default function Form(props) {
    // let idno=0;
    function onchangefunction(event) {
        props.setInputTask(event.target.value)
    }
    function onclickfunction(event) {
        event.preventDefault();
        props.setTaskarray([...props.taskarray, { taskinfo: props.inputTask, isCompleted: false, id: Math.random() * 1000 }])
        props.setInputTask("")
    }
    function HandleChange(event) {
        props.setFilterValue(event.target.value)
    }
    // console.log(props.taskarray)
    return (
        <>
            <form action="">
                <input type="text" name="" id="" className='Todoinput' onChange={onchangefunction} value={props.inputTask} />
                <button className="todo-button" type="submit" onClick={onclickfunction}>
                    <i className="fas fa-plus-square" ></i>
                </button>
                <div className="select">
                    <select name="" id="" onChange={HandleChange} >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
            </form>
        </>
    )
}
