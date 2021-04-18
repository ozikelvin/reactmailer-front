import React , {useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import {makePrivate} from './Protect';


function Multiple(){


const [state, setState] = useState({
    sender:'',
    receiver:'',
    subject:'',
    text:'',
    reply:'',
    attachment:''
})


const onChaneSender =(e)=> setState({...state,  sender: e.target.value })
const onChaneReceiver =(e)=> setState({...state,  receiver: e.target.value })
const onChaneBody =(e)=> setState({...state,  text: e.target.value })
const onChaneReply =(e)=> setState({...state,  reply: e.target.value })
const onChaneSubject =(e)=> setState({...state,  subject: e.target.value })
const onChaneAttachment =(e)=> setState({...state,  attachment: e.target.files[0]})

const myStyle ={
    marginTop: '30px'
}
const onSub= async(e)=>{
    e.preventDefault();

    const formData = new FormData();

                formData.append('sender', state.sender)
                formData.append('receiver', state.receiver)
                formData.append('reply', state.reply)
                formData.append('subject', state.subject)
                formData.append('text', state.text)
                formData.append('file', state.attachment)


                try{
                    let response =  await axios.post(`${process.env.REACT_APP_API}/multipleSend`, formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data',
                              "Authorization":`Bearer ${localStorage.getItem("token")}` 
                          }
                      })
                      console.log(response.data)
                  }catch(err){
                      console.log(err)
                  }

    setState({...state,
     sender: "",
      receiver:"",
       reply:"",
        subject:"",
         text:"",
         attachment:""
    })
      //  window.location = '/'
}

    return(
        <React.Fragment>
            <Navbar />
            <div className='container' style={myStyle} >
                <h1>Send With Attachment</h1>
                <div className='jumbotron'>
                    <form onSubmit={onSub}>

                    <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="Sender">Sender</label>
                    <input type="text" name='sender'onChange={onChaneSender} value={state.sender} className='form-control' />
                </div>
                    <div className='form-group col-sm-6'>
                    <label htmlFor="Receiver">Receiver</label>
                    <input type="text" name='receiver' onChange={onChaneReceiver} value={state.receiver} className='form-control' />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="Reply-To">Reply-To</label>
                    <input type="text" name='reply' onChange={onChaneReply} value={state.reply} className='form-control' />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="Subject">Subject</label>
                    <input type="text" name='subject' onChange={onChaneSubject} value={state.subject} className='form-control' />
                </div>

                    <div className="form-group">
                        <label htmlFor="Body">Body</label>
                        <textarea name="text" className='form-control' cols='49' rows='5'  onChange={onChaneBody} value={state.text}></textarea>
                        <input type="file" name='file' onChange={onChaneAttachment}  className='btn btn-primary' />
                    </div>
                       </div>
                       <div>
                                <input type="submit" className='btn btn-success' value='Submit' />
                            </div>
                    </form>

                </div>
            </div>
        </React.Fragment>
    )
}

export default makePrivate(Multiple);
