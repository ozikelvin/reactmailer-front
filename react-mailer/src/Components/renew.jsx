import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

function Renew(){

    const [renew, setRenew] = useState({
        email:'',
        coupon:''
    })
    const [info, setInfo] = useState('');
    const [err, setErr] = useState('');
    const onChane = (e) =>{
    setRenew({...renew, [e.target.name]: e.target.value})
    }

    const myStyle = {
        marginTop: "20px",
      };
      const jub={
        width:'50%',
        marginLeft:'25%',
        marginTop:'12%'
      }

    const onSub =(e)=>{
        e.preventDefault();
        const renewal = {
            email:renew.email,
            coupon: renew.coupon
        }
        axios.post('https://alizik.herokuapp.com/renewSub', renewal)
        .then(res =>{
            if(res.status === 200){
                setInfo(res.data.Message)
                setTimeout(()=>{setInfo('')}, 4000)
            }
        })
        .catch(err =>{
            setErr(err.response.data.Message)
            setTimeout(()=>{setErr('')}, 2000)
        })

    }

    return(
        <React.Fragment>
        <NavBar />
        <div style={myStyle} className='container'>
        <div  >
       {info ?<span className='alert alert-success ' >{info}</span> :<span></span>}
       { err ?<span className='alert alert-danger ' >{err}</span> : <span></span> }
        </div>
        <div style={jub} className='jumbotron'>
            <form onSubmit={onSub} >
                <h4> Renew Subscription </h4>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={onChane}
                value={renew.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Coupon">Coupon</label>
              <input
                type="text"
                className="form-control"
                name="coupon"
                onChange={onChane}
                value={renew.password}
              />
            </div>
                <div>
                    <input type="submit" value="Submit" className='btn btn-success'/>
                </div>
            <b> Back to <Link to='/login' >Login</Link> </b>
            </form>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Renew
