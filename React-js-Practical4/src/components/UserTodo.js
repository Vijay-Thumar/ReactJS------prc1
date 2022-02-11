import React, { useState } from 'react';
import './UserTodo.css'


function UserTodo(props){

    const [checked, setChecked] = useState(false);

    function changeStatus() {
        setChecked(!checked);
    }

    return(
        <React.Fragment>
            <div className='usertodo'>
                <span className={checked ? 'strike' : ''}>{props.task}</span>
                {/* <span className='date'>{props.date.toString()}</span> */}
                <input className='chkbox' type={'checkbox'} onClick={changeStatus}/>
            </div>
        </React.Fragment>
    );
}

export default UserTodo;