import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function AdminLog() {
  let history = useHistory();

  const [user, setUser] = useState({
    adminName: "",
    password: "",
  });

  const onChane = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [info, setInfo] = useState(null);
  const adSt = {
    color: "white",
    marginLeft:'12px'
  };

  const onSub = (e) => {
    e.preventDefault();

    const admin = {
      adminName: user.adminName,
      password: user.password,
    };
    console.log(admin);
    axios
      .post("https://malino-cfo.herokuapp.com/admin.v1/login", admin)
      .then((res) => {
        localStorage.setItem("admin_token", res.data.token);
        history.push("/admin.v1/dash");
      })
      .catch((err) => {
        setInfo('Wrong Admin name or Password')
        setTimeout(()=> {setInfo(null)}, 2800)
      });

    setUser({ ...user, adminName: "", password: "" });
  };
  const syc ={
    color: "black",
    marginTop:'6px',
    width:'50%',
    marginLeft:'10px'
  }
  const jub={
    width:'50%',
    marginLeft:'25%',
    marginTop:'10%'
  }
  return (
    <div>
      <nav style={{position:'sticky'}}  className="nav navbar-light bg-dark">
        <Link to="/admin.v1/login" className="navbar-brand" style={adSt}>
          Admin <i className="fas fa-sign-in-alt"></i>

        </Link>


      </nav>
      {info ? <p style={syc} className=' alert alert-danger ' ><b> {info} </b></p>:<p></p> }
      <div className="container">
        <div style={jub} className="jumbotron p-14">
          <h1>Admin Login</h1>
          <form onSubmit={onSub}>
              <div className="form-group col-sm-6 ">
                <label htmlFor="Name">Admin Name</label>
                <input
                  type="text"
                  name="adminName"
                  onChange={onChane}
                  value={user.adminName}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Sender">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChane}
                  value={user.password}
                  className="form-control"
                />
              </div>
              <input type="submit" value="Submit" className="btn btn-success" />

          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLog;
