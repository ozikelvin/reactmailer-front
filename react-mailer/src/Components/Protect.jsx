import React from "react";
import { Redirect } from "react-router-dom";

function makePrivate(WrappedComponent) {
  return class extends React.Component {
    state = { isAuth: localStorage.getItem("token") ? true : false };
    render() {
      return !this.state.isAuth ? (
        <Redirect to="/login" />
      ) : (
        <WrappedComponent />
      );
    }
  };
}

export { makePrivate };
