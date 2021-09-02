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
        if (getInput) {           
            props.onAddTodo(newTodo)
        } else {
            return alert('gaboleh kosong coy')
        }

        setInput('')
    }

    const handleInputTodo = (e) => {
        // if (e.target.value !== '') {  
        //     console.log(e.target.value)
        //     console.log(e.target.value)
        // }
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