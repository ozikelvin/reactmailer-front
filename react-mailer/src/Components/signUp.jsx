import React, { useState } from "react";
import axios from "axios";
import NavBar from "./signNav";
import { useHistory } from "react-router-dom";
import { checkedLoggedInUser } from "./checkLoggedIn";
function SignUp() {
  let history = useHistory();
  const [info, setInfo] = useState(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    coupon: "",
  });
  const onChane = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const myStyle = {
    marginTop: "20px",
  };

  const onSub = async (e) => {
    e.preventDefault();
    setInfo("");
    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
      coupon: state.coupon,
    };

    await axios
      .post(`https://malino-cfo.herokuapp.com/reg`, newUser)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          history.push("/login");
        }
      })
      .catch((err) => {
        setInfo(err.response.data.Message)
        setTimeout(()=> {setInfo(null)}, 2800)
      });

    setState({
      ...state,
      name: "",
      email: "",
      password: "",
      coupon: "",
    });
  };
  const syc ={
    color: "black",
    marginTop:'3px',
    width:'50%',
    marginLeft:'10px'
  }

  const jub={
    width:'50%',
    marginLeft:'25%',
    marginTop:'8%'
  }
  const hStyle = {
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />

      <div style={myStyle} className="container">
        <div style={jub} className="jumbotron">
        {info ? <p style={syc} className=' alert alert-danger ' ><b> {info} </b></p>:<p></p> }
          <h1 style={hStyle}>Sign Up</h1>
          <form onSubmit={onSub}>
            <div className="form-group">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={onChane}
                value={state.name}
              />
            </div>
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

            <div className="form-group">
              <label htmlFor="Coupon">Coupon</label>
              <input
                type="text"
                className="form-control"
                name="coupon"
                onChange={onChane}
                value={state.coupon}
              />
            </div>
            <div>
              <input type="submit" className='btn btn-success' value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default checkedLoggedInUser(SignUp)
