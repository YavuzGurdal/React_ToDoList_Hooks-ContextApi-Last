import React from 'react'
import { Button } from 'react-bootstrap';
import { FaTrashAlt, FaCheck, FaEdit } from 'react-icons/fa';

const TodoListItem = ({ todo, editTodoFunc, switchCompleteTodo, deleteTodo }) => {
    return (
        <li key={todo.id} className={todo.complete ? "active" : ""}>
            {todo.name}

            <div>
                {/* <Button // silme butonu
                    style={{ marginRight: '10px' }}
                    onClick={() => editTodoFunc(todo.id)}
                    variant="outline-secondary"
                >
                    <FaEdit />
                </Button> */}


                <Button // yapildi butonu
                    onClick={() => switchCompleteTodo(todo.id)}
                    variant="outline-success"
                >
                    <FaCheck />
                </Button>

                <Button // silme butonu
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteTodo(todo.id)}
                    variant="outline-danger"
                >
                    <FaTrashAlt />
                </Button>


            </div>
        </li>
    )
}

export default TodoListItem
