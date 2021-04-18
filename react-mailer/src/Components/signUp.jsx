
import React, {useState} from 'react';
import axios from 'axios'
import NavBar from './Navbar';
import {useHistory} from "react-router-dom"

function SignUp() {
    
 let history = useHistory();
const [ error , setError] = useState()
const [state, setState] = useState({
    name:'',
    email:'',
    password: '',
    coupon:""
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
        name: state.name,
        email: state.email,
        password: state.password,
        coupon: state.coupon

    }

   await axios.post(`${process.env.REACT_APP_API}/reg`, newUser)
       .then(res => {
           console.log(res);
           if(res.status === 200) {
                   history.push("/login");
        }
           
           
           
    } )
    .catch(err =>setError(err.response.data.Message))

    setState({
        ...state,
        name: '',
        email:'',
        password: '',
        coupon: ''
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
                <h1 style={hStyle} >Sign Up</h1>
                <form onSubmit={onSub}>
                    <div className="form-group">
                        <label htmlFor="Name">Name:</label>
                        <input type="text" className='form-control' name='name' onChange={onChane} value={state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" className='form-control' name='email' onChange={onChane} value={state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className='form-control' name='password' onChange={onChane} value={state.password} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Coupon">Coupon</label>
                        <input type="text" className='form-control' name='coupon' onChange={onChane} value={state.coupon} />
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

export default SignUp