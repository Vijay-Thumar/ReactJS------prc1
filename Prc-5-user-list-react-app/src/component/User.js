import React from 'react';
import './User.css';
import userImg from './imgs/userImg.png';
import * as Icon from 'react-feather';
import online from './imgs/online.png';

function User(props) {

    const mouseEnterHandler = () => {
        props.onHover({ IsMouseEntred: true, name: props.Uname, email: props.Uemail, status: props.Ustatus, access: props.Uaccess, isOwner: props.Uisowner });
    }
    const mouseExitrHandler = () => {
        props.onHover({ IsMouseEntred: false, name: props.Uname, email: props.Uemail, status: props.Ustatus, access: props.Uaccess, isOwner: props.Uisowner });
    }

    return (
        <div>
            <div className='users' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitrHandler}>
                <div className='User_flex'>
                    <div className='Profile_flex'>
                        <div className='user-profile'>
                            <img className='userImg' src={userImg} alt="Testing image"></img>
                        </div>
                        <div>
                            <div className='user_name'>{props.Uname}</div>
                            <div className='User_Email'>{props.Uemail}</div>
                        </div>
                    </div>
                    <div>
                        {props.Ustatus !== "Online" ?
                            <span className='user-status'>
                                <select className='dropdown'>
                                    <option>Inactive</option>
                                    <option>Active</option>
                                </select>
                            </span> :
                            <span className='user-status'>
                                <img src={online} width='12'></img> Active
                            </span>}
                    </div>
                    <div>
                        <span className='user-access'>{props.Uaccess}</span>
                        <span className='user-icon'>{
                            props.Uisowner ? <Icon.Lock className='blur_ico' /> : <Icon.Trash className='blur_ico' />
                        }</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default User