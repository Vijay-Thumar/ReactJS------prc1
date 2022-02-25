import React from 'react';
import './User.css';
import * as Icon from 'react-feather';
import online from './imgs/online.png';
import { useDispatch } from 'react-redux';
import { profileAction } from './store/profile';

function User(props) {
    const dispatch = useDispatch();
    const mouseEnterHandler = (e) => {
        e.preventDefault();
        dispatch(profileAction.showProfile());
        props.onHover({ fname: props.userFirstName, lname: props.userLastName, email: props.uemail, userimage: props.user_avatar, status: props.ustatus, access: props.uaccess, isOwner: props.uisowner });

    }
    const mouseExitrHandler = (e) => {
        e.preventDefault();
        dispatch(profileAction.hideProfile());
        props.onHover({ fname: props.userFirstName, lname: props.userLastName, email: props.uemail, userimage: props.user_avatar, status: props.ustatus, access: props.uaccess, isOwner: props.uisowner });
    }
    const deleteUserHandler = () => {
        console.log("user is deleted" + props.userFirstName);
    }

    return (

        <div>
            <div className='users' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitrHandler}>
                <div className='User_flex'>

                    <div className='Profile_flex'>
                        <div className='user-profile'>
                            <img className='userImg' src={props.user_avatar} alt="Testing image"></img>
                        </div>
                        <div>
                            <div className='user_name'>{props.userFirstName}_{props.userLastName}</div>
                            <div className='User_Email'>{props.uemail}</div>
                        </div>
                    </div>

                    <div>
                        {
                            props.ustatus !== "Online" ?
                                <span className='user-status'>
                                    <select className='dropdown'>
                                        <option>Inactive</option>
                                        <option>Active</option>
                                    </select>
                                </span> :
                                <span className='user-status'>
                                    <img src={online} width='12'></img> Active
                                </span>
                        }
                    </div>

                    <div>
                        <span className='user-access'>{props.uaccess}</span>
                        <span className='user-icon'>
                            {
                                props.uisowner ? <Icon.Lock className='blur_ico' /> : <Icon.Trash className='blur_ico' onClick={deleteUserHandler} />
                            }
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User