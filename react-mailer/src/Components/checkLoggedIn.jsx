import React from 'react'
import { Redirect } from 'react-router-dom'


function checkedLoggedInUser(WrappedComponent) {
    return class extends React.Component {
      state = { isAuth:false }
        componentWillMount() {
            const token =  localStorage.getItem("token");
            console.log(token);
            if(token ){
                this.setState({isAuth: true})
            }
        }
        render() {
            return this.state.isAuth ? <Redirect to="/sendMail" /> : <WrappedComponent/>
        }
    };
}


export  {checkedLoggedInUser}
