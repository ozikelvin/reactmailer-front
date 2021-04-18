import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { makePrivAdmin } from "./adHoc";

function CreateCoupon() {
  const myStyle = {
    color: "white",
    marginLeft: "7px",
  };

  const sty = {
    color: "white",
  };
  const onSub = async (e) => {
    e.preventDefault();

    await axios
      .get(
        "http://localhost:3002/admin.v1/coupon/create",

        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav className="nav navbar-light bg-dark">
        <Link to="/admin.v1/dash" className="navbar-brand" style={myStyle}>
          {" "}
          Admin <i className="fas fa-user"></i>{" "}
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/coupons" className="nav-link" style={sty}>
              Coupons
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="jumbotron">
          <form onSubmit={onSub}>
            <div className="form-group">
              <input
                type="submit"
                value="Create-Coupon"
                className="btn btn-success"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default makePrivAdmin(CreateCoupon);
