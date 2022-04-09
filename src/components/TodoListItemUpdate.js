import React, { useContext, useState, useEffect, useRef } from 'react'
import { DataContext } from './DataProvider'
import { useParams } from 'react-router-dom' // id yi almak icin
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // ana sayfaya donmesi icin


const TodoListItemUpdate = () => {
    const { id } = useParams() // url den id yi aliyoruz. bunu app.js de Route da yazdim
    const navigate = useNavigate(); // ana sayfaya donmesi icin

    const { todos, setTodos } = useContext(DataContext); // contexapi ile bunlari aliyorum

    const todoUpdateInput = useRef();

    const [updateTodo, setUpdateTodo] = useState({
        id: '',
        name: '',
        complete: '',
        editTodo: ''
    })

    const updateTodoFunc = e => {
        e.preventDefault();

        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if (todo.id === updateTodo.id) {
                todo.name = updateTodo.name
            }
        })
        setTodos(newTodos)

        setUpdateTodo({ //state i bosaltiyorum
            id: '',
            name: '',
            complete: '',
            editTodo: ''
        })

        navigate('/'); // ana sayfaya donmesi icin
    }

    useEffect(() => { // gelen id nin todo sunu state e atmak icin yazdim
        const getTodo = () => {
            setUpdateTodo(todos.find(todo => todo.id === id))
        }
        getTodo()

        todoUpdateInput.current.focus(); // create inputuna focus olması icin. useRef ile

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    //console.log(updateTodo)
    //console.log(todos)

    return (
        <div>
            <Form onSubmit={updateTodoFunc}>
                <Form.Group className="mb-3">
                    <InputGroup className="mb-3">
                        <FormControl
                            ref={todoUpdateInput} //ref degerini bu sekilde veriyoruz
                            name="name" // degistirecegim degerin name ini veriyorum
                            value={updateTodo.name}
                            onChange={e => setUpdateTodo({ ...updateTodo, name: e.target.value.toLocaleLowerCase() })}
                            placeholder="Update Todo"
                            autoComplete='off' // onceden yazilanlarin cikmamasi icin
                        />
                        <Button type="submit" variant="outline-primary" id="button-addon2">
                            Update
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default TodoListItemUpdate
