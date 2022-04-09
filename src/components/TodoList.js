import React, { useContext, useEffect } from 'react'
import { DataContext } from './DataProvider'
import TodoListItem from './TodoListItem';

const TodoList = () => {

    const { todos, setTodos, todosCopyData, traggerFilteredTodos, setTodosCopyData } = useContext(DataContext); // destructuring. contexapi kullanarak verileri aliyoruz.
    //console.log(todos)
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

    const updateCopyTodosFunc = () => { // butonlardan yapilan filtreleme islemleri icin yazdim
        const newTodos = [...todos]
        //console.log(newTodos)
        //console.log(traggerFilteredTodos)
        if (traggerFilteredTodos === 'complete') {
            setTodosCopyData(newTodos.filter(todo => todo.complete))
        } else if (traggerFilteredTodos === 'active') {
            setTodosCopyData(newTodos.filter(todo => !todo.complete))
        } else if (traggerFilteredTodos === 'all') {
            setTodosCopyData(newTodos)
        }
    }

    useEffect(() => { // butonlardan yapilan filtreleme islemleri icin yazdim
        updateCopyTodosFunc()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [traggerFilteredTodos, todos])

    return (
        <ul>
            {
                todosCopyData.map((todo) => (
                    <TodoListItem
                        todo={todo} key={todo.id} id={todo.id}
                        switchCompleteTodo={switchCompleteTodo}
                        deleteTodo={deleteTodo}
                    />
                ))
                /* todos.map((todo) => (
                    <TodoListItem
                        todo={todo} key={todo.id} id={todo.id}
                        switchCompleteTodo={switchCompleteTodo}
                        deleteTodo={deleteTodo}
                    />
                )) */
            }
        </ul>
    )
}

export default TodoList