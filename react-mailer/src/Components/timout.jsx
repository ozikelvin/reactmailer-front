import React from 'react'


function Timeout(){

    const myStyle ={
        fontSize: '12em',
       marginLeft: '35%'
    }
    const cust = {
        fontSize: '4em',
        color: 'rgb(100, 200, 60)'
    }

    return(
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1 style={cust}> Error 404.... &#128526;</h1>
                    <h1> Service Timed Out.. Sorry Your time has expired!!!!! </h1>
                    <h1>Please Renew your payments </h1>
                    <span style={myStyle}>&#128528;</span>
                </div>
            </div>
        </div>

    )
    }

export default Timeout 