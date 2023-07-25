import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './Todo.css';
import { useState } from 'react';
import { useEffect } from 'react';
export default function TodoApp() {

    let [inputValue, setInputValue] = useState("");
    let [todoArray, setTodoArray] = useState([]);
    let [filtervalue, setFiltervalue] = useState("all")
    let [filterArray, setFilterArray] = useState([]);
    
    useEffect(() => {
        getLocalTodos()
    }, []);

    useEffect(() => {
        filterHandle()
        saveLocalTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtervalue, todoArray]);


    let filterHandle = () => {
        if (filtervalue === 'completed') {
            setFilterArray(todoArray.filter((todo) => todo.isCompleted))
        }
        if (filtervalue === 'incompelte') {
            setFilterArray(todoArray.filter((todo) => !todo.isCompleted))
        }
        if (filtervalue === 'all') {
            setFilterArray(todoArray)
        }
    }
    let saveLocalTodos = () => {
        if (todoArray.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todoArray))
        };
    };
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodoArray(todoLocal);
        }
    };
    return (
        <>
            <header>
                <h1>My Todo-List</h1>
            </header>
            <Form setInputValue={setInputValue} inputValue={inputValue} setTodoArray={setTodoArray} todoArray={todoArray} setFiltervalue={setFiltervalue} />
            <TodoList todoArray={filterArray} setTodoArray={setTodoArray} />
        </>
    )
}
