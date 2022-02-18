import './TodoForm.css'
import React, { useRef, useState } from 'react';


const TodoForm = (props) => {

    let title = useRef("");

    const submitHandler = (event) => {
        event.preventDefault();
        // if (!title.current.value || /^\s*$/.test(title.current.value)) {
        //     return alert("Please enter a valid title"); 
        // }
        let newLValue = title.current.value;

        if (newLValue.trim().length === 0){
            alert("Please enter a valid title");
            return;
        }

        props.onSaveTodoData(title.current.value);
    };

    const cancelHandler = (event) => {
        props.onCancelHandler(false);
    };

    return (
        <form onSubmit={submitHandler}>

            <div className='new_todo_control'>
                <label>Title:</label>
                <input type="text" ref={title} />
            </div>


            <span className='new_todo__action'>
                <button type='submit'>submit</button>
            </span>
            <span>
                <button className='cancel__action' onClick={cancelHandler}>Cancel</button>
            </span>
        </form>
    );
};
export default TodoForm;