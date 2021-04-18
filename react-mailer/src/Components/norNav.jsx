import React from 'react';
import {Link} from 'react-router-dom'


function NorNav(){



    const myStyle ={
        color: 'white'
    }




    return(
        <div>
            <nav className='nav navbar-light bg-dark'>
                <Link to="/users" className='navbar-brand' style={myStyle} > Users </Link>
                <ul className='nav'>
                    <li className="nav-item">
                        <Link to="/coupons" className='nav-link' >Coupons</Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default NorNav
