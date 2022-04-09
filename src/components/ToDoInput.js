import React, { useContext, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import shortid from 'shortid';
import TodoList from "./TodoList";

const ToDoInput = () => {

    const { todos, setTodos, todoName, setTodoName } = useContext(DataContext); // contexapi ile bunlari aliyorum
    //const [todoName, setTodoName] = useState("");
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault();

        if (todoName !== '') {
            setTodos([...todos, { id: shortid.generate(), name: todoName, complete: false, editTodo: false }]);
            setTodoName(""); // submit yaptiktan sonra inputu bosaltiyorum
            todoInput.current.focus(); // todoinput' a focus oluyor. useRef ile 
        }
    }

    useEffect(() => {
        todoInput.current.focus(); // create inputuna focus olması icin. useRef ile
    }, [])

    return (
        <div>
            <Form onSubmit={addTodo}>
                <Form.Group className="mb-3">
                    <InputGroup className="mb-3">
                        <FormControl
                            ref={todoInput} //ref degerini bu sekilde veriyoruz 
                            name="todos"
                            // girilen degeri buradan gonderiyoruz. name='todos' diyoruz. todos inputtan girilen 
                            // degerler oluyor. event.target.value yazarak inputten girilen degere ulasmis oluyoruz. onChange fonksiyonu ile
                            value={todoName}
                            onChange={e => setTodoName(e.target.value.toLocaleLowerCase())}
                            placeholder="What to do?"
                            autoComplete='off' // onceden yazilanlarin cikmamasi icin
                        />
                        <Button type="submit" variant="outline-primary" id="button-addon2">
                            Create
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>

            <TodoList />
        </div>
    )
}

export default ToDoInput
