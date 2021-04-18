
import React, {useState} from 'react';
import axios from 'axios'
import NavBar from './Navbar';
import {useHistory} from "react-router-dom"
import {checkedLoggedInUser} from './checkLoggedIn';
function SignIn(){

    let history = useHistory();
const [ error , setError] = useState()
const [state, setState] = useState({
    email:'',
    password: ''
})
const onChane =(e)=>{
    setState({...state, [e.target.name]: e.target.value})
}

const myStyle = {
    marginTop: '20px'
}

const onSub = async (e) =>{
    e.preventDefault();
setError("")
    const newUser = {
        email: state.email,
        password: state.password
    }

   await axios.post(`${process.env.REACT_APP_API}/login`, newUser)
    .then(res =>{
         console.log(res);
           if(res.status === 200) {
            localStorage.setItem("token", res.data.token);
            history.push("/sendMail");
        } 
    })
    .catch(err =>setError(err.response.data.Message))

    setState({...state,
        email:'',
        password:''
})
}
const hStyle ={
    textAlign: 'center'
}
    return(
        <div>
            <NavBar />
             <p style={{color:"red"}}>{error }</p>
            <div style={myStyle} className="container">
            <div className="jumbotron">
            <h1 style={hStyle} >Login</h1>
                <form onSubmit={onSub}>

                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" className='form-control' name='email' onChange={onChane} value={state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className='form-control' name='password' onChange={onChane} value={state.password} />
                    </div>
                    <div>
                        <input type="submit" value='Submit' />
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default checkedLoggedInUser(SignIn)
