import React from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Form from './Components/Form.jsx';
import Multiple from './Components/multiple.jsx'



function App(){
  return(
    <div>
      <Router>
        <Navbar />
        <Route path='/' exact component={Form} />
        <Route path='/multiple' component={Multiple} />
      </Router>
    </div>
  )
}

export default App