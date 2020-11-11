import React, { useReducer } from 'react'
import { ToDoContext } from './Context/ToDoContext'
import todoReducer from './Context/reducer'
import ToDoForm from './Components/ToDoForm'
import Todos from './Components/Todos'
import './App.css'

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [])

  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
      <div className="App container pt-3">
        <h1 className="text-center py-5">TO-DO APP</h1>
        <Todos />
        <ToDoForm />
      </div>
    </ToDoContext.Provider>
  );
}

export default App;
