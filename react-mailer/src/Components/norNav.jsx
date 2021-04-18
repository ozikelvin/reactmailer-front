import React from 'react';
import {Link , useHistory} from 'react-router-dom'


function NorNav(){

    let history = useHistory();

    const myStyle ={
        color: 'white',
        marginLeft:'7px'
    }

    const sty ={
        color:'white'
    }

    const Logout = () => {
        localStorage.removeItem("admin_token");
        history.push('/admin.v1/login');

    }


    return(
        <div>
            <nav className='nav navbar-light bg-dark'>
                <Link to="/admin.v1/dash" className='navbar-brand' style={myStyle} > Admin <i className="fas fa-user"></i>  </Link>
                <ul className='nav'>
                    <li className="nav-item">
                        <Link to="/coupons" className='nav-link' style={sty} >Coupons</Link>
                    </li>
                    <div className="nav">
                        <ul className='nav navbar-nav navbar-right'>
                            <li className='nav-item' >
                                <Link to='/createCoupon' className='btn btn-warning navbar-btn btn-sm m-2 ' style={sty} >Create Coupon</Link>
                            </li>
                        </ul>
                        <ul className=''>
                            <li className='nav-item' >
                                <Link to='#' onClick={Logout}  className='btn btn-primary navbar-btn btn-sm m-2 ' style={sty} >Logout</Link>
                            </li>
                        </ul>
                    </div>

                </ul>
            </nav>

        </div>
    )
}

export default NorNav
