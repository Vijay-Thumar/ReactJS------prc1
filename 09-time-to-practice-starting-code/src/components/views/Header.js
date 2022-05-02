import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <ul>
                <Link to='/signup'><li>Signup</li></Link>
                <Link to='/allusers'><li>All users</li></Link>
            </ul>
        </div>
    )
}

export default Header