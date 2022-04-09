import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [todos, setTodos] = useState([
        // ""
        /* { name: "shopping", complete: false },
        { name: "education", complete: true }, */
    ])

    const [traggerFilteredTodos, setTraggerFilteredTodos] = useState('all'); // filtreleme islemleri icin
    const [todosCopyData, setTodosCopyData] = useState([]) // filtreleme islemleri icin
    const [todoName, setTodoName] = useState("");

    //console.log(todosCopyData)
    //console.log(todos)

    // localstorage' dan kayıtları okuyoruz...
    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem("todoStore"))
        if (todoStore) {
            setTodos(todoStore)
            //setTodosCopyData(todoStore)
        }
    }, [])

    // localstorage' e kayıt yapıyoruz
    useEffect(() => {
        localStorage.setItem("todoStore", JSON.stringify(todos))
    }, [todos])

    return (
        <DataContext.Provider value={{ todos, setTodos, todoName, setTodoName, todosCopyData, setTodosCopyData, traggerFilteredTodos, setTraggerFilteredTodos }} >
            {props.children}
        </DataContext.Provider>
    )
}
