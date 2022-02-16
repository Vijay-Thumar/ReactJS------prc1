import React, { useState } from 'react';
import './UserTodo.css'


function UserTodo(props){

    const [checked, setChecked] = useState(props.isChecked);

    function changeStatus() {
        setChecked(!checked);
    }

    return(
        <React.Fragment>
            <div className='usertodo'>
                <span className={checked ? 'strike' : ''}>{props.task}</span>
                <input className='chkbox' type={'checkbox'} onClick={changeStatus} defaultChecked={checked} />
            </div>
        </React.Fragment>
    );
}

export default UserTodo;