import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useEffect, useState} from "react";

import EditTodo from './EditTodo';

const ListTodo = () =>
{
    const [todos, setTodos] = useState([]);

    //delete a todo
    const deleteTodos = async (id) =>
    {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`,
            {
                method: "DELETE"
            })
            setTodos(todos.filter((currentElement) => {if(id !== currentElement.todo_id){return currentElement}}));
        } catch (err) {
            console.log(err);
        }
    }

    const getTodos = async () =>
    {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
            console.log(jsonData)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTodos();
    },[]);
    
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Description</th>              
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    todos.map((elementObject) => {
                        return (
                        <tr>
                            <td>{elementObject.description}</td>
                            <td>
                                <EditTodo todo={elementObject} getTodos={getTodos}/>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => deleteTodos(elementObject.todo_id)}>x</button>
                            </td>
                        </tr>
                    )})  
                    }
        
                </tbody>

            </table>
        </div>
    )
}

export default ListTodo;
