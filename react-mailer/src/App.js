import React from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route,  } from 'react-router-dom';
import Form from './Components/Form.jsx';
import Multiple from './Components/multiple.jsx'
import TimeOut from './Components/timout.jsx'
import SignUp from './Components/signUp.jsx';
import Login from './Components/login.jsx';
import AdminLog from './Components/aminLog';
import AdminDash from './Components/adminDash';




function App(){
  return(
    <div>
      <Router>
        <Route path='/admin.v1/login' component={AdminLog} />
        <Route path='/admin.v1/dash' exact component={AdminDash} />
        <Route path='/' exact component={SignUp} />
        <Route  path='/multiple' component={Multiple}/>
        <Route path='/timer'  component={TimeOut} />
        <Route  path='/sendMail' component={Form} />
        <Route exact path='/login' component={Login} />
      </Router>
    </div>
  )
}

export default App
