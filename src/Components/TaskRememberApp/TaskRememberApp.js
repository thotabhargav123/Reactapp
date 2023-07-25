/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Form from './Form'
import '../TaskRememberApp/Tasks.css'
import Tasklists from './Tasklists'
import { useState } from 'react'
import { useEffect } from 'react'


export default function TaskRememberApp() {
    let [inputTask, setInputTask] = useState("");
    let [taskarray, setTaskarray] = useState([]);
    let [filterTask, setFilterTask] = useState([]);
    let [filterValue, setFilterValue] = useState("all");
    // console.log(taskarray);

    useEffect(() => {
        loadTask();
    }, [])

    useEffect(() => {
        handlefilter();// eslint-disable-next-line
        saveTask();
    }, [filterValue, taskarray]);

    function handlefilter() {
        if (filterValue === "all") {
            setFilterTask(taskarray);
        }
        else if (filterValue === "completed") {
            setFilterTask(taskarray.filter((item) => item.isCompleted));
        }
        else {
            setFilterTask(taskarray.filter((item) => !item.isCompleted))
        }
    }

    function saveTask() {
        if (taskarray.length > 0) {
            localStorage.setItem('task', JSON.stringify(taskarray));
        }
    }
    function loadTask() {
        if (localStorage.getItem('task' === null)) {
            localStorage.setItem('task', JSON.stringify([]))
        }
        else {
            setTaskarray(JSON.parse(localStorage.getItem('task')))
        }
    }

    return (
        <>
            <header>My Tasks</header>
            <Form setInputTask={setInputTask} inputTask={inputTask} setTaskarray={setTaskarray} taskarray={taskarray} setFilterValue={setFilterValue} filterValue={filterValue} />
            <Tasklists taskarray={filterTask} setTaskarray={setTaskarray} />
        </>
    )
}
