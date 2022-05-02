import React, {useState} from 'react';
import ucss from './cssFiles/User.module.css'

function User(props) {

    const deleteClickHandler = () =>{
        alert('Delete is clicked!! User id: ' + props.id + ' User name: ' + props.name)
        props.onDeleteUser(props.id);
    }

    const editClickHandler = () => {
        
    }

    return (
        <div className={`${ucss.user_profile}`}>
            <label>Name: </label>
            <span><b><i>{props.name}</i></b></span><br /> 
            <label>Email: </label>
             <span><i>{props.email}</i></span><br /> 
            <label>Phone: </label>
             <span><i>{props.phone}</i></span><br /> 
             <button onClick={deleteClickHandler}> Delete</button>
             <button onClick={editClickHandler}>Edit</button>
        </div>
    )
}

export default User;