import './TodoForm.css'
import React, { useRef, useState } from 'react';


const TodoForm =(props) => {

    let title = useRef("");

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveTodoData(title.current.value);
    };
    
    return (
        <form onSubmit={submitHandler}>
                
            <div className='new_todo_control'>
                <label>Title:</label>
                <input type="text" ref={title}/>
            </div>
            
            <div className='new_todo__action'>
                <button type='submit'>submit</button>
            </div>

        </form>
    );
};
export default TodoForm;