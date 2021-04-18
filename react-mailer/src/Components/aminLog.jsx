import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function AdminLog() {
  let history = useHistory();
  const [err, setErr] = useState("");
  const [user, setUser] = useState({
    adminName: "",
    password: "",
  });

  const onChane = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const adSt = {
    color: "white",
  };

  const onSub = (e) => {
    e.preventDefault();

    const admin = {
      adminName: user.adminName,
      password: user.password,
    };
    console.log(admin);
    axios
      .post("http://localhost:3002/admin.v1/login", admin)
      .then((res) => {
        localStorage.setItem("admin_token", res.data.token);
        history.push("/admin.v1/dash");
      })
      .catch((err) => setErr(err.response.data.Message));

    setUser({ ...user, adminName: "", password: "" });
  };

  return (
    <div>
      <nav className="nav navbar-light bg-dark">
        <Link to="/adminLog" className="navbar-brand" style={adSt}>
          Admin Mailer
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <span style={adSt}> Admin Dashbord </span>
          </li>
        </ul>
      </nav>
      <p style={{ color: "red" }}>{err}</p>
      <div className="container">
        <div className="jumbotron">
          <h1>Admin Login</h1>
          <form onSubmit={onSub}>
            <div className="row">
              <div className="form-group col-sm-6">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLog;
