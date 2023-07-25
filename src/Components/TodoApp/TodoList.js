import React from 'react';
import Todo from './Todo';
let TodoList = (props) => {
    return (
        <div>
            <div className="container">
                <ul className="lists">
                    {props.todoArray.map(todo => (
                        // <Todo todoArray={props.todoArray} />
                        <Todo todo={todo} todoArray={props.todoArray} setTodoArray={props.setTodoArray} key={todo.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
