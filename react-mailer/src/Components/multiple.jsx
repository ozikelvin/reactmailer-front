import React, { useState } from "react";
import axios from "axios";
import { makePrivate } from "./Protect";
import NavbarUser from "./dasNavBar";

function Multiple() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const [state, setState] = useState({
    host:'',
    port:'',
    username:'',
    pass:'',
    name: "",
    bcc:"",
    receiver: "",
    subject: "",
    text: "",
    reply: "",
    attachment: "",
  });

  const onChaneName = (e) => setState({ ...state, name: e.target.value });

  const onChaneReceiver = (e) => setState({ ...state, receiver: e.target.value });
  const onChaneHost = (e) => setState({...state, host: e.target.value});
  const onChanePort = (e) => setState({...state, port: e.target.value});
  const onChaneUsername = (e) => setState({...state, username: e.target.value});
  const onChanePass = (e) => setState({...state, pass: e.target.value});
  const onChaneBcc = (e)=> setState({...state, bcc: e.target.value});
  const onChaneBody = (e) => setState({ ...state, text: e.target.value });
  const onChaneReply = (e) => setState({ ...state, reply: e.target.value });
  const onChaneSubject = (e) => setState({ ...state, subject: e.target.value });
  const onChaneAttachment = (e) =>  setState({ ...state, attachment: e.target.files[0] });


  const myStyle = {
    marginTop: "12%",
  };
  const onSub = async (e) => {
    e.preventDefault();

    /// Clear error
    setError("");

    /// Clear success
    setSuccess("");
    const formData = new FormData();
    formData.append("name", state.name);

    formData.append("receiver", state.receiver);
    formData.append("reply", state.reply);
    formData.append("subject", state.subject);
    formData.append("text", state.text);
    formData.append("bcc", state.bcc);
    formData.append("file", state.attachment);
    formData.append('host', state.host);
    formData.append('port', state.port);
    formData.append('username', state.username);
    formData.append('pass', state.pass)

    await axios
      .post(`http://localhost:3002/multipleSend`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          ///TODO: Create another state property to show sent
          setSuccess("Mail sent successfully.");
        }
      })
      .catch((err) => setError(err.response.data.Message));


  };

  return (
    <React.Fragment>
      <NavbarUser />
      {error ? <p className="alert alert-danger">{error}</p> : <p></p>}
      <div className="container" style={myStyle}>
        <h1>Send With Attachment</h1>
        <div className="jumbotron">
          <form onSubmit={onSub}>
          <h4>SMTP CONFIGURATION</h4>
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP HOST</label>
                <input
                  type="text"
                  name="host"
                  onChange={onChaneHost}
                  value={state.host}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP PORT</label>
                <input
                  type="number"
                  name="port"
                  onChange={onChanePort}
                  value={state.port}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP USERNAME</label>
                <input
                  type="text"
                  name="username"
                  onChange={onChaneUsername}
                  value={state.username}
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="Name">SMTP PASSWORD</label>
                <input
                  type="text"
                  name="pass"
                  onChange={onChanePass}
                  value={state.pass}
                  className="form-control"
                />
              </div>
              <div>
              {error ? <p className="alert alert-danger">{error}</p> : <p></p>}
              {success ? <p className="alert alert-success">{success}</p> : <p></p>}
              </div>
              </div>
              <h4>MAIL SET-UP</h4>
            <div className="row">
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
                <label htmlFor="Receiver">Receiver</label>
                <input
                  type="text"
                  name="receiver"
                  onChange={onChaneReceiver}
                  value={state.receiver}
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
                  className="form-control"
                  cols="41"
                  rows="5"
                  onChange={onChaneBody}
                  value={state.text}
                ></textarea>
                <input
                  type="file"
                  name="file"
                  onChange={onChaneAttachment}
                  className="btn btn-primary"
                />
              </div>
              <div className='form-group   mx-3'>
                  <label htmlFor="BCC">BCC:</label>
                <textarea
                  name="bcc"
                  className="form-control"
                  cols="49"
                  rows="5"
                  onChange={onChaneBcc}
                  value={state.bcc}
                ></textarea>
                  </div>
            </div>
            <div>
              <input type="submit" className="btn btn-success" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default makePrivate(Multiple);
