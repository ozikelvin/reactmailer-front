import React from 'react'
import { Redirect } from 'react-router-dom'


function MakePrivate(WrappedComponent) {
    return class extends React.Component {
      state = { isAuth:false }
        componentDidMount() {
            console.log('rannn')
            const token =  localStorage.getItem("token");
            if(token === null || token === undefined || token === false){
            return this.setState({ isAuth:false })
            }
            this.setState({isAuth:true })
        }
        render() { 
            return (
              <div>
                  { this.state.isAuth ? <WrappedComponent/>: <Redirect to='/login' /> }
              </div>
            );
        }
    };
}


export  {MakePrivate}
