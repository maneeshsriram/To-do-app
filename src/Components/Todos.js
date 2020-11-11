import React, { useContext } from 'react'
import { ToDoContext } from '../Context/ToDoContext'
import { REMOVE_TODO } from '../Context/action.types'


const Todos = () => {
    const { todos, dispatch } = useContext(ToDoContext);

    return (
        <div className="text-center px-5 text-uppercase" id="todoString">
            {todos.map(todo => (
                <h2 key={todo.id}>
                    {todo.todoString}


                    <span className="float-right" onClick={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        })
                    }}>
                        <i class="fas fa-trash "></i>
                    </span>

                </h2>
            ))}
        </div>
    )
}



export default Todos
