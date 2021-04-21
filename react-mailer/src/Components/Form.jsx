
import React, { useState } from "react";
import axios from "axios";
import NavbarUser from "./dasNavBar";
import { makePrivate } from "./Protect";
function FormList() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [smtp, setSmtp] = useState({
    host:'',
    port:'',
    username:'',
    pass:'',
  });
  const [state, setState] = useState({

    name: "",
    sender: "",

    receiver:"",
    subject: "",
    text: "",
    reply: "",
  });

  const onChane = (e) => setSmtp({...smtp, [e.target.name]: e.target.value});
  const onChaneName = (e) => setState({ ...state, name: e.target.value });
  const onChaneReceiver = (e) => setState({ ...state, receiver: e.target.value });
  const onChaneSender = (e)=> setState({...state, sender: e.target.value});
  const onChaneBody = (e) => setState({ ...state, text: e.target.value });
  const onChaneReply = (e) => setState({ ...state, reply: e.target.value });
  const onChaneSubject = (e) => setState({ ...state, subject: e.target.value });

  const myStyle = {
    marginTop:'7%'
  };
  const onSub = async (e) => {
    e.preventDefault();
    /// Clear error
    setError("");

    /// Clear success
    setSuccess("");
    /// Create new mail
    const newMail = {
      host: smtp.host,
      port: smtp.port,
      username: smtp.username,
      pass: smtp.pass,
      name: state.name,
      sender: state.sender,
      receiver: state.receiver,
      reply: state.reply,
      subject: state.subject,
      text: state.text,
    };
    /// Send mail
    await axios
      .post(`https://malino-cfo.herokuapp.com/sendMail`, newMail, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          ///TODO: Create another state property to show sent
          setSuccess("Mail sent successfully.");
          setTimeout(()=> {setSuccess('')}, 3500)
        }
      })
      .catch((err) =>{
        setError(err.response.data.Message)
        console.log(err)
        setTimeout(()=> {setError('')}, 3500)
      });
  };


  return (
    <React.Fragment>
      <NavbarUser />

      <div className="container" style={myStyle}>
        <h1>Mail Sender</h1>
        <div  className="jumbotron">
          <form onSubmit={onSub}>
          <h4>SMTP CONFIGURATION</h4>
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP HOST</label>
                <input
                  type="text"
                  name="host"
                  onChange={onChane}
                  value={smtp.host}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP PORT</label>
                <input
                  type="number"
                  name="port"
                  onChange={onChane}
                  value={smtp.port}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP USERNAME</label>
                <input
                  type="text"
                  name="username"
                  onChange={onChane}
                  value={smtp.username}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP PASSWORD</label>
                <input
                  type="text"
                  name="pass"
                  onChange={onChane}
                  value={smtp.pass}
                  className="form-control"
                />
              </div>
              <div>
              {error ? <p className="alert alert-danger">{error}</p> : <p></p>}
              {success ? <p className="alert alert-success">{success}</p> : <p></p>}
              </div>
              </div>
              <h4>Message Set-Up</h4>
              <div className='row' >
              <div className="form-group col-sm-6">
                <label htmlFor="Name">Sender Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={onChaneName}
                  value={state.name}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="Receiver">Sender Email</label>
                <input
                  type="text"
                  name="receiver"
                  onChange={onChaneSender}
                  value={state.sender}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Reply-To">Reply-To</label>
                <input
                  type="text"
                  name="reply"
                  onChange={onChaneReply}
                  value={state.reply}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  onChange={onChaneSubject}
                  value={state.subject}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Body">Body</label>
                <textarea
                  name="text"
                  className="form-control  "
                  cols="41"
                  rows="5"
                  onChange={onChaneBody}
                  value={state.text}
                ></textarea>
                </div>
                  <div className='form-group   mx-3'>
                  <label htmlFor="BCC">Receiver</label>
                <textarea
                  name="bcc"
                  className="form-control"
                  cols="41"
                  rows="5"
                  onChange={onChaneReceiver}
                  value={state.receiver}
                ></textarea>
                  </div>
              </div>

            <div>
              <input type="submit" className="btn btn-success" value="Submit" />
            </div>
          </form>

          <br />

        </div>
      </div>
    </React.Fragment>
  );
}

export default makePrivate(FormList);
