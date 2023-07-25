import React from 'react'
import Task from './Task'

export default function Tasklists(props) {
    return (
        <>
            <div className="container">
                <ul className="lists">
                    {
                        props.taskarray.map(task => (
                            <Task task={task} taskArray={props.taskarray} setTaskarray={props.setTaskarray} key={task.id} />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
