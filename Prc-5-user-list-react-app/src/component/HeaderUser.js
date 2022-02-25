import React from 'react'
import './HeaderUser.css'

function HeaderUser() {
  return (
    <div className='Header'>
      <span className='Title-Name'> Name </span>
      <span className='Title-Status'> Status </span>
      <span className='Title-Access'> Access </span>
    </div>
  )
}

export default HeaderUser