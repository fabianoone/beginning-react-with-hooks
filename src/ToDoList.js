import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "./App";
import { Button, Form, Table } from "react-bootstrap";
import useAPI from "./useAPI";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
    // receive state and dispatch from index.js
    const {state, dispatch} = useContext(TodosContext);
    const [todoText, setTodoText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const buttonTitle = editMode ? 'Edit' : 'Add';

    const endpoint = "http://localhost:3000/todos/";
    const savedTodos = useAPI(endpoint);

    useEffect(() => {
        dispatch({ type: "get", payload: savedTodos });
    }, [savedTodos]); // dispatch whoever savedTodods changes

    const handleSubmit = async event => {
        event.preventDefault();
        if(editMode) {
            dispatch({ type: 'edit', payload: {...editTodo, text: todoText}})
            setEditMode(false)
            setEditTodo(null)
        } else {
            const newToDo = {id: uuidv4(), text: todoText};
            await axios.post(endpoint, newToDo);
            dispatch({ type: 'add', payload: newToDo });
        }
        setTodoText('') // to clear field after adding
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter To Do"
                        onChange={event => setTodoText(event.target.value)}
                        value={todoText} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">{buttonTitle}</Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.text}</td>
                            <td 
                                style={{ cursor: 'pointer'}}
                                onClick={() => {
                                    setTodoText(todo.text)
                                    setEditMode(true)
                                    setEditTodo(todo)
                                }}>
                                    Edit
                            </td>
                            <td 
                                style={{ cursor: 'pointer'}} 
                                onClick={async () => {
                                    await axios.delete(endpoint + todo.id)
                                    dispatch({ type: 'delete', payload: todo })
                                }}
                            >
                                    Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ToDoList;
