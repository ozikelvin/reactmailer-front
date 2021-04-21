import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { makePrivAdmin } from "./adHoc";

function CreateCoupon() {

const [info, setInfo] = useState(null);
const [err, setErr] = useState(null);
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
        "https://alizik.herokuapp.com/admin.v1/coupon/create",
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      )
      .then((res) => {

          setInfo('Coupon Code has been created Successfully')
          setTimeout(()=> {setInfo(null)}, 2000)

      })
      .catch((err) => setErr('Error in creating coupon'));
  };
  const cst ={
    padding:'10px',
    marginTop:'9%',
    width: '40%',
    marginLeft:'26%'

  }

  return (
    <div>
      <nav className="nav navbar-light bg-dark">
        <Link to="/admin.v1/dash" className="navbar-brand" style={myStyle}>
          {" "}
          Admin <i className="fas fa-user"></i>{" "}
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="#" className="nav-link" style={sty}>
            <i className="fas fa-code"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <div style={cst} >
        <div  >
       { err ?<span className='alert alert-danger ' >{err}</span> : <spand></spand> }
        </div>
        <div className="jumbotron">
          <h4>The Mailer Coupon allows Users to be able to sign up</h4>
          <h4>Click on the button below to create a coupon code </h4>
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
       {info ? <p className='alert alert-success ' >{info}</p> : <p></p> }
      </div>
    </div>
  );
}

export default makePrivAdmin(CreateCoupon);
