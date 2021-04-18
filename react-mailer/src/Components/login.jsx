
import React, {useState} from 'react';
import axios from 'axios'
import NavBar from './Navbar';

function SignIn(){

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

    const newUser = {
        email: state.email,
        password: state.password
    }

   await axios.post('http://localhost:3002/login', newUser)
    .then(res =>{
        if(res.data.success === true){
            console.log(res.data.Message)
            window.location = '/sendMail'
        }else if(res.data.expired === true){
            window.location = '/timer'
        }else{
            window.location = '/login'
        }
    })
    .catch(err => console.log(err))

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

export default SignIn
