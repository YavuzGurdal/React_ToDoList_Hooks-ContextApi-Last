import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from './DataProvider'
import { useParams } from 'react-router-dom' // id yi almak icin
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // ana sayfaya donmesi icin


const TodoListItemUpdate = () => {
    const { id } = useParams() // url den id yi aliyoruz. bunu app.js de Route da yazdim
    const navigate = useNavigate(); // ana sayfaya donmesi icin

    const { todos, setTodos } = useContext(DataContext); // contexapi ile bunlari aliyorum

    //const todoInput = useRef();

    const [updateTodo, setUpdateTodo] = useState({
        id: '',
        name: '',
        complete: '',
        editTodo: ''
    })

    const updateTodoFunc = e => {
        e.preventDefault();

        /* onceki cozum. ama todo larin yeri degisiyor. cunku silip tekrar kaydetmis oluyorum */
        // const newTodos = [...todos]
        // const filteredTodos = newTodos.filter(todo => todo.id !== id)

        // setTodos([...filteredTodos, updateTodo])

        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if (todo.id === updateTodo.id) {
                todo.name = updateTodo.name
            }
        })
        setTodos(newTodos)

        // todoInput.current.focus(); // todoinput' a focus oluyor. useRef ile 

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
    }, [id])

    //console.log(updateTodo)
    //console.log(todos)

    return (
        <div>
            <Form onSubmit={updateTodoFunc}>
                <Form.Group className="mb-3">
                    <InputGroup className="mb-3">
                        <FormControl
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
