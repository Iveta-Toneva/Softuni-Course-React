import { useEffect, useState } from 'react'
import styles from '../components/ToDoList.module.css'
import TodoListItem from './TodoListItem';


export default function TodoList() {

    const [todos, setTodos] = useState([]);

    const buttonHandler = (id) => {
        setTodos(todos => todos.map(todo => todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }


    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => setTodos(Object.values(data)));
    }, [])

    return (
        <>
            <h1>To Do List</h1>
            <div className={styles.container}>
                {todos.map(todo =>
                    <TodoListItem
                        key={todo._id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        onButtonClick={buttonHandler}
                        _id={todo._id}
                    />)}
            </div>
        </>
    )

}