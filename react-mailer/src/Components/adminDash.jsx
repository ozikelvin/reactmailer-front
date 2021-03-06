import React, { useState, useEffect } from "react";
import NorNav from "./norNav";
import axios from "axios";
import { Link } from "react-router-dom";

import { makePrivAdmin } from "./adHoc";

const Users = ({ user, onDelete }) => {
  return (
    <tr className="m-8">
      <td> {user.name} </td>
      <td> {user.email} </td>
      <td>
        {" "}
        <Link
          to="#"
          onClick={() => onDelete(user._id)}
          className="btn btn-danger my-3"
        >
          Delete  <i className="fas fa-trash"></i>
        </Link>{" "}
      </td>
    </tr>
  );
};
const Coupon = ({ coupon, onDelete }) => {
  return (
    <tr>
      <td> {coupon.code} </td>
      <td> {coupon.isUsed ? "Used" : "Not-Used"} </td>
      <td>
        {" "}
        <Link
          to="#"
          onClick={() => onDelete(coupon._id)}
          className="btn btn-danger my-3"
        >
          Delete <i className="fas fa-trash"></i>
        </Link>{" "}
      </td>
    </tr>
  );
};

function AdminDash() {
  const [coupons, setCoupons] = useState([]);
  const [users, setUsers] = useState([]);



  useEffect(() => {

    axios
      .get("https://malino-cfo.herokuapp.com/admin.v1/details", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setCoupons(res.data.details.coupons);
          setUsers(res.data.details.users);
        }
      });
  }, []);

  const sty = {
    color: "white",
  };
  const tbSty = {
    marginTop: "20px",
  };
  const handleDelete = (id) => {
    axios
      .post(
        "https://malino-cfo.herokuapp.com/admin.v1/user/delete",
        { userID: id },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const newUsers = users.filter((user) => user._id !== id);
          setUsers(newUsers);
        }
      });
  };
  const handleDelt = (id) => {
    console.log(id);
    axios
      .post(
        "https://malino-cfo.herokuapp.com/admin.v1/coupon/delete",
        { couponID: id },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const newCoupons = coupons.filter((coupon) => coupon._id !== id);
          setCoupons(newCoupons);
        }
      });
  };

  return (
    <div>
      <NorNav />
      <div className="container">
        <div>
          <table style={tbSty} className="table table-striped">
            <thead style={sty} className="table bg-dark">
              <tr>
                <td>User-Name</td>
                <td> Email </td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((currentuser) => {
                  return (
                    <Users
                      key={currentuser._id}
                      user={currentuser}
                      onDelete={handleDelete}
                    />
                  );
                })
              ) : (
                <tr>
                  <td>There are no users registered yet.</td>
                </tr>
              )}
            </tbody>
          </table>
          <table style={tbSty} className="table table-striped">
            <thead style={sty} className="table bg-dark">
              <tr>
                <td>Coupon</td>
                <td> Status </td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {coupons.length > 0 ? (
                coupons.map((currentcoupon) => {
                  return (
                    <Coupon
                      key={currentcoupon._id}
                      coupon={currentcoupon}
                      onDelete={handleDelt}
                    />
                  );
                })
              ) : (
                <tr>
                  <td>There are no created coupons yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default makePrivAdmin(AdminDash);
