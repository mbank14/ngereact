import './Todo.css'
import {useState} from 'react';
import TodoList from '../todo-list/TodoList';
import TodoAdd from '../todo-add/TodoAdd';

const Todo = () => {

    const [getTodos, setTodos]= useState([
        {
            id: 1,
            value: "kokoko"
        },
        {
            id: 2,
            value: "kikiki"
        },
        {
            id: 3,
            value: "lololo"
        },
    ])


    const eventAddTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    }


    return (
        <div className="todo__container">
            <h2>Coba Todo List</h2>
            <TodoList dataListTodos={getTodos}/>
            <TodoAdd onAddTodo={eventAddTodo}/>
        </div>
    )
}

export default Todo