import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from '../redux/actions/todoActions';

const AddTodo = () => {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const dispatch = useDispatch()
    return (
        <div>
            <Form style={{display:"flex", width:"70%", margin:"150px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input className='add-todo' type="email" placeholder="add todo ..." value={input} onChange={(e) => handleInput(e)} />
                </Form.Group>
                <a className='btn' onClick={() => dispatch(addTask({id: Math.random(), text:input})) } 
                style={{width:"150px", height:"40px"}}>
                  <h2> ADD </h2>  
                </a>
            </Form>
    </div>
    );
};

export default AddTodo;
