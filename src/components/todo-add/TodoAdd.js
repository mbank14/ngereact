import './TodoAdd.css'
import {useState} from 'react';

const TodoAdd = (props) => {

    const [getInput, setInput] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            value: getInput
        }

        props.onAddTodo(newTodo)

        setInput('')
    }

    const handleInputTodo = (e) => {
        setInput(e.target.value)
    }


    return(
        <form className="todo__form" onSubmit={handleSubmit}>
            <input type="text" value={getInput} onChange={handleInputTodo}></input>
            <button type="submit">submit</button>
        </form>
    )
}


export default TodoAdd