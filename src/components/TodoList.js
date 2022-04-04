import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import TodoListItem from './TodoListItem';

const TodoList = () => {

    const [todos, setTodos, setTodoName] = useContext(DataContext); // destructuring. contexapi kullanarak verileri aliyoruz.

    const switchCompleteTodo = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    const deleteTodo = id => {
        const newTodos = [...todos]
        return setTodos(newTodos.filter(todo => todo.id !== id))
        // filter yeni bir array olusturdugu icin id'si gonderdigim id'ye esit olmayanlari yeni bir array olarak geri donduruyor
    }

    return (
        <ul>
            {
                todos.map((todo) => (
                    <TodoListItem
                        todo={todo} key={todo.id} id={todo.id}
                        switchCompleteTodo={switchCompleteTodo}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList
