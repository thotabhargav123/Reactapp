import React from 'react'
let Todo = (props) => {
    function HandleDelete(event) {
        event.currentTarget.parentNode.parentNode.classList.add("fall")
        event.currentTarget.parentNode.parentNode.addEventListener("transitionend", e => {
            props.setTodoArray(props.todoArray.filter((el) =>
                el.id !== props.todo.id
            ))
        });
    }
    function HandleComplete() {
        props.setTodoArray(props.todoArray.map((item) => {
            if (item.id === props.todo.id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted,
                };
            }
            return item;
        }))
    }
    return (
        <div>
            <div className={`todo ${props.todo.isCompleted ? "completed" : ""}`} key={props.todo.id}>
                <li className='todo-value '>{props.todo.todotext}</li>
                <div>
                    <button className="complete-btn" onClick={HandleComplete}><i className="fas fa-check"></i></button>
                    <button className="trash-btn" onClick={HandleDelete}><i className="fas fa-trash"></i></button>
                </div>
            </div>
        </div >
    )
}

export default Todo