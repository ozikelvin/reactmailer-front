import React from "react";

function Timeout() {
  const myStyle = {
    fontSize: "12em",
    marginLeft: "35%",
  };
  const cust = {
    fontSize: "4em",
    color: "rgb(100, 200, 60)",
  };

  return (
    <div>
      <div className="container">

          <h1 style={cust}> Error 404.... &#128526;</h1>
          <h1> This Page does not exist!!!! </h1>
          <h1>Vist this correct route </h1>
          <span style={myStyle}>&#128528;</span>

      </div>
    </div>
  );
}

export default Timeout;
