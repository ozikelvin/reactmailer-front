
import React, {useState} from 'react';
import axios from 'axios'
import NavBar from './Navbar';

function SignUp(){

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

    const newUser = {
        name: state.name,
        email: state.email,
        password: state.password,
        coupon: state.coupon

    }

   await axios.post('http://localhost:3002/reg', newUser)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setState({...state, name:'',
        email:'',
        password:''
})
        window.location = '/login'
}
const hStyle ={
    textAlign: 'center'
}

    return(
        <div>
            <NavBar />
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
