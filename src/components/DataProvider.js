import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [todos, setTodos] = useState([
        // ""
        /* { name: "shopping", complete: false },
        { name: "education", complete: true }, */
    ])
    const [todoName, setTodoName] = useState("");

    return (
        <DataContext.Provider value={[todos, setTodos, todoName, setTodoName]} >
            {props.children}
        </DataContext.Provider>
    )
}
