import React from 'react';
import './UserProfile.css';
import userImg from './imgs/userImg.png';


function UserProfile(props) {

  // console.log(props);

  return (

    <div className='mainDiv_flex'>
      <div>
        <img className='user_img' src={userImg} alt="" srcset=""></img>
      </div>
      <div className='User_name'>
        {props.data.name}
      </div>
      <div className='User_email'>
      {props.data.email}
      </div>
      <div className='User_name'>
        Your Plan: standerd
      </div>
      <div>
        <button className='button_color'>
          Active User
        </button>
      </div>
      <div className='plan_uses User_name'>
        Plan Uses
      </div>
      <div className='usage_bar'>
        <div className='initial_usage'> </div>
      </div>
      <div className='flexbod-div'>
        <div className='SpaceInBetween'>
          <div className='Clicks'>2450</div>
          <div className='User_email'>clicks reviewed</div>
        </div>
        <div className='SpaceInBetween'>
          <div className='Clicks'>5000</div>
          <div className='User_email'>Monthly clicks</div>
        </div>

      </div>
    </div>

  )
}

export default UserProfile
