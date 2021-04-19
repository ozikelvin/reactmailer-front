import React, { useState } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import { useHistory, Link } from "react-router-dom";
import { checkedLoggedInUser } from "./checkLoggedIn";
function SignIn() {
  let history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const onChane = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const myStyle = {
    marginTop: "20px",
  };
  const [info, setInfo] = useState(null);
  const syc ={
    color: "black",
    marginTop:'3px',
    width:'50%',
    marginLeft:'10px'
  }


  const onSub = async (e) => {
    e.preventDefault();
    setInfo("");
    const newUser = {
      email: state.email,
      password: state.password,
    };

    await axios
      .post(`${process.env.REACT_APP_API}/login`, newUser)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          history.push("/sendMail");
        }
      })
      .catch((err) =>{

         setInfo('Invalid Username or Password')
         setTimeout(()=> {setInfo(null)}, 2800)
        });

    setState({ ...state, email: "", password: "" });
  };
  const jub={
    width:'50%',
    marginLeft:'25%',
    marginTop:'12%'
  }
  const hStyle = {
    textAlign: "center",
  };
  return (
    <div>
      <NavBar />

      {info ? <p style={syc} className=' alert alert-danger ' ><b> {info} </b></p>:<p></p> }
      <div style={myStyle} className="container">
        <div style={jub} className="jumbotron">
          <h1 style={hStyle}>Login</h1>
          <form onSubmit={onSub}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={onChane}
                value={state.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={onChane}
                value={state.password}
              />
            </div>
            <div>
              <input type="submit" className='btn btn-success' value="Submit" />
            </div>
          </form>
          <br />
          <b>Need to upgrade coupon? click the coupon link <Link to='#' >Coupon</Link> </b>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
