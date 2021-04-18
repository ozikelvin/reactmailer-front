import React from 'react'
import { Redirect } from 'react-router-dom'


function MakePrivAdmin(WrappedComponent) {
    return class extends React.Component {
      state = { isAuth:false }
        componentDidMount() {

            const token =  localStorage.getItem("admin_token");
            console.log(token);
            if(token ){
                this.setState({isAuth: true})
            }
;            // if(token === null || token === undefined || token === false){
            //  this.setState({ isAuth:false })
            // }else{
            //     this.setState({isAuth:true })
            // }

        }
        render() {
            return (
              <div>
                  { this.state.isAuth ? <WrappedComponent/>: <Redirect to='/admin.v1/login' /> }
              </div>
            );
        }
    };
}


export  {MakePrivAdmin}
