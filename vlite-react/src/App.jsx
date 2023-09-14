import {useEffect, useState} from "react";
import "./styles.css"
import {NewTodoForm} from "./NewTodoForm.jsx";
import {TodoList} from "./TodoList.jsx";

export default function App(){
    const [todos, setToDos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    function addTodo(title){
        setToDos(currentTodos => {
            return [
                ...currentTodos,
                {id: crypto.randomUUID(), title, completed: false}
            ]
        })
    }

    function toggleTodo(id, completed){
        setToDos(currentTodos =>{
            return currentTodos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id){
        setToDos(currentTodo => {
            return currentTodo.filter(todo => todo.id !== id)
        })
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className="header">ToDo List</h1>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </>
    )
}