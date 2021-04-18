import React from 'react';
import {Link} from 'react-router-dom'


function Navbar(){



    const myStyle ={
        color: 'white'
    }




    return(
        <div>
            <nav className='nav navbar-light bg-dark'>
                <Link to="/" className='navbar-brand' style={myStyle} > Mailer </Link>
                <ul className='nav'>
                    <li className="nav-item">
                        <Link to="/multiple" className='nav-link' >File Sender</Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Navbar
