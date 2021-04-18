import React from "react";
import { Redirect } from "react-router-dom";

function makePrivate(WrappedComponent) {
  return class extends React.Component {
    state = { isAuth: false };
    componentWillMount() {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        this.setState({ isAuth: true });
      }
    }
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
