import React, { useContext, useState } from 'react'
import { ToDoContext } from '../Context/ToDoContext'
import { ADD_TODO } from '../Context/action.types'

const { v4: uuidv4 } = require('uuid');


const ToDoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(ToDoContext);

    const handleSubmit = event => {
        event.preventDefault();

        if (todoString === "") {
            return alert("Please eneter a todo")
        }

        const todo = {
            todoString,
            id: uuidv4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("")
    }

    return (
        <form onSubmit={handleSubmit} className="text-center pt-5">
            <input type="text" name="todo" id="todo" placeholder="Type your to-do..." value={todoString} onChange={e => setTodoString(e.target.value)} className="p-3 text-center" />
            <button className="btn btn-warning btn-lg">ADD <i class="fas fa-plus"></i></button>
        </form>
    )
}

export default ToDoForm
