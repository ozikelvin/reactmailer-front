import React from "react";
import { Link } from "react-router-dom";

function NavSty() {

  const navB ={
    position:'fixed',
    top:'0',
    width:'100%',
    overflow:'hidden'
  }

  const myStyle = {
    color: "white",
    marginLeft:'9px'

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
            <Link to="/login" style={myStyle} className="nav-link">
              Login <i className="fas fa-users"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavSty;
