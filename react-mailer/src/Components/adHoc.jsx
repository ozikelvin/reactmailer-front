import React from "react";
import { Redirect } from "react-router-dom";

function makePrivAdmin(WrappedComponent) {
  return class extends React.Component {
    state = { isAuth: localStorage.getItem("admin_token") ? true : false };
    render() {
      return !this.state.isAuth ? (
        <Redirect to="/admin.v1/login" />
      ) : (
        <WrappedComponent />
      );
    }
  };
}

export { makePrivAdmin };
