import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import "./../assets/style.css"

const EditTodo =({todo, getTodos}) =>
{
    const [description, setDescription] = useState(todo.description);
    const [clickedEdit, setClickEdit] = useState(false);
    const handleEdit = async (e, id) => {
        const body = { description };
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                // Data has been successfully updated, fetch the updated list of todos
                window.location = "/"
            } else {
                console.error("Failed to update todo.");
                // Optionally handle the case where the update fails
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (     
        <Fragment>
            <button className='btn btn-primary' onClick={() => setClickEdit(true)}>Edit</button>
            {clickedEdit && 
            <>
                <div className='modal-custom justify-content-center d-flex' id={`modal${todo}`}>

                    <form action="" className='mt-5' onSubmit={(e) => {

                        handleEdit(e, todo.todo_id)}}>
                        <input type="text"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button type='submit' className='btn btn-success'  >Agree</button>
                        <button type='button' onClick={()=>setClickEdit(false)}>Close</button>
                    </form>
                </div>
            </>
            } 

        </Fragment>
    )
}

export default EditTodo;