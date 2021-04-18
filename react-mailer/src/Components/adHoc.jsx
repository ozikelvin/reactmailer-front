import React from "react";
import { Redirect } from "react-router-dom";

function makePrivAdmin(WrappedComponent) {
  return class extends React.Component {
    state = { isAuth: false };
    componentWillMount() {
      const token = localStorage.getItem("admin_token");
      console.log(token);
      if (token) {
        this.setState({ isAuth: true });
      }
    }
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
