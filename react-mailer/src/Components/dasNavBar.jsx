import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function NavbarUser() {

const [name , setName ] = useState("")

  useEffect(() => {

    axios.get(`https://alizik.herokuapp.com/profile`, {
        headers:{
                    "Content-Type": "application/json;charset=UTF-8",
                     Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
    })
    .then(res =>{
      setName(res.data.userProfile.username);
      localStorage.setItem("userDetails", res.data.userProfile.username);

    })
    .catch(err => console.log(err))}, []);

const logOut =()=>{

  axios.post(`https://alizik.herokuapp.com/logout`, { username : localStorage.getItem("userDetails") }, {
        headers:{
                    "Content-Type": "application/json;charset=UTF-8",
                    }
    })
    .then(res =>{

      localStorage.removeItem("token")
      localStorage.removeItem("userDetails")
            window.location ='/login'


    })
    .catch(err => console.log(err))
}

  const navB ={
    position:'fixed',
    top:'0',
    width:'100%',
    overflow:'hidden',
    zIndex:'5'
  }

  const myStyle = {
    color: "white",
    marginLeft: '12px',
    marginTop:'3px'
  };
  const myStyleT = {
    color: "white",
    marginTop:'2px'

  };

  const im={
    width:'15%'
  }
  // const newStyle = {
  //   marginTop:'2px'
  // }

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
            <b   >
              <button onClick={logOut} className='btn btn-success my-2' >Sign out</button>
            </b>
          </li>

        </ul>
        <div className='navbar d-flex align-items-end ml-6'>
           <li className='nav-item' >
            <b   style={myStyleT} >
              <p > {"Welcome "+ name + "      " ??"" } <i className="fas fa-user"></i> </p>
            </b>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
