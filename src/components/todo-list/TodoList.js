import './TodoList.css'

const TodoList = (props) => {
    
    console.log(props)

    return(
        <ul className="TodoListContainer">
            {
                props.dataListTodos.map((todo) => {
                    return <li key={todo.id}>
                        {todo.value} <i>i</i>
                    </li>
                })
            }
        </ul>
    )
}

export default TodoList