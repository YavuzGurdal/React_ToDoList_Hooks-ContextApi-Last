import React, { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const ToDoInput = () => {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState("");
    //const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }]);
        setTodoName("");
        //todoInput.current.focus(); // todoinput' a focus oluyor. useRef ile
    }

    return (
        <div>
            <Form onSubmit={addTodo}>
                <Form.Group className="mb-3">
                    <InputGroup className="mb-3">
                        <FormControl
                            name="todos"
                            // girilen degeri buradan gonderiyoruz. name='todos' diyoruz. todos inputtan girilen 
                            // degerler oluyor. event.target.value yazarak inputten girilen degere ulasmis oluyoruz. onChange fonksiyonu ile
                            value={todoName}
                            onChange={e => setTodoName(e.target.value.toLocaleLowerCase())}
                            placeholder="What to do?"
                            autoComplete='off' // onceden yazilanlarin cikmamasi icin
                        />
                        <Button type="submit" variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ToDoInput
