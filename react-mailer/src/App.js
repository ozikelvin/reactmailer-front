import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Components/Form.jsx";
import Multiple from "./Components/multiple.jsx";
import TimeOut from "./Components/timout.jsx";
import SignUp from "./Components/signUp.jsx";
import Login from "./Components/login.jsx";
import AdminLog from "./Components/aminLog";
import AdminDash from "./Components/adminDash";
import CreateCoupon from "./Components/CreateCoupon";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/admin.v1/login" component={AdminLog} />
        <Route path="/admin.v1/dash" exact component={AdminDash} />
        <Route path="/" exact component={SignUp} />
        <Route path="/multiple" component={Multiple} />

        <Route path="/sendMail" component={Form} />
        <Route exact path="/login" component={Login} />
        <Route path="/createCoupon" component={CreateCoupon} />
        <Route path="/timer" component={TimeOut} />
        <Route  component={TimeOut} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
