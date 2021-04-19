import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function NavbarUser() {


const logOut =()=>{

    axios.get(`${process.env.REACT_APP_API}/logout`, {
        headers:{
                    "Content-Type": "application/json;charset=UTF-8",
                     Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
    })
    .then(res =>{

            localStorage.removeItem("token")
            window.location ='/login'


    })
    .catch(err => console.log(err))
}

  const navB ={
    position:'fixed',
    top:'0',
    width:'100%',
    overflow:'hidden'
  }

  const myStyle = {
    color: "white",
    marginLeft:'12px'
  };
  const myStyleT = {
    color: "white",
    marginLeft:'12px',
    marginTop:'2px'

  };

  const im={
    width:'15%'
  }

  return (
    <div>
      <nav style={navB} className="nav navbar-light bg-dark">
        <Link to="/" className="navbar-brand" style={myStyle}>
          {" "}
          Mailer{" "} <img src={'./maillogo1.png'} alt='' style={im} />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/multiple"  style={myStyleT} className="nav-link">
              Send Attachment <i className="fas fa-paperclip"></i>

            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sendMail"  style={myStyleT} className="nav-link">
              Send Text <i className="fas fa-file-alt"></i>
            </Link>
          </li>
          <li className="nav-item">
            <b   style={myStyleT} >
              <button onClick={logOut} className='btn btn-primary my-2' >LogOut <i className="fas fa-user"></i></button>
            </b>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarUser;
