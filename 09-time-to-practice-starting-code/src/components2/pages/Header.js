import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <ul>
                <Link to='/quotes'><li>all quates</li></Link>
                <Link to='new-quote'><li>new quates</li></Link>
            </ul>
        </div>
    )
}

export default Header