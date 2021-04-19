import React from "react";
import { Redirect } from "react-router-dom";

function checkedLoggedInUser(WrappedComponent) {
  return class extends React.Component {
 state = { isAuth: localStorage.getItem("token") ? true : false };
    render() {
      return this.state.isAuth ? (
        <Redirect to="/sendMail" />
      ) : (
        <WrappedComponent />
      );
    }
  };
}

export { checkedLoggedInUser };
