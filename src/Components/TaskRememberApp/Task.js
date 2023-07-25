import React from 'react'
let Task = (props) => {
    function HandleSubmission() {
        //    console.log("handle")
        props.setTaskarray(props.taskArray.map((item) => {
            if (item.id === props.task.id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted,
                    
                };
            }
            return item;
        }))
    }
    function HandleDeletion(event) {
        // console.log("handle")
        event.currentTarget.parentNode.parentNode.classList.add("fall");
        event.currentTarget.parentNode.parentNode.addEventListener("transitionend", function (event) {
            props.setTaskarray(props.taskArray.filter((item) =>
                item.id!==props.task.id
            ))
        })
    }
    return (
        <>
            <div>
                <div className={`todo ${props.task.isCompleted ? "completed" : ""}`}>
                    <li className='todo-value'>{props.task.taskinfo}</li>
                    <div>
                        <button className="complete-btn" onClick={HandleSubmission}><i className="fas fa-check"></i></button>
                        <button className="trash-btn" onClick={HandleDeletion}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Task