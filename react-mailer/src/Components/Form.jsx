import React , {useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar'
function FormList(){


const [state, setState] = useState({
    name: '',
    sender:'',
    receiver:'',
    subject:'',
    text:'',
    reply:''
})

const onChaneName =(e)=> setState({...state,  name: e.target.value })
const onChaneSender =(e)=> setState({...state,  sender: e.target.value })
const onChaneReceiver =(e)=> setState({...state,  receiver: e.target.value })
const onChaneBody =(e)=> setState({...state,  text: e.target.value })
const onChaneReply =(e)=> setState({...state,  reply: e.target.value })
const onChaneSubject =(e)=> setState({...state,  subject: e.target.value })


const myStyle ={
    marginTop: '30px'
}
const onSub= async(e)=>{
    e.preventDefault();


    const newMail = {
        name: state.name,
        sender: state.sender,
        receiver: state.receiver,
        reply: state.reply,
        subject: state.subject,
        text: state.text
    }

    await axios.post('http://localhost:3002/sendMail', newMail)
    .then(response => console.log(response.data))
    .catch(err => console.log(`An error occured while trying to send data to this Api ${err}`))


    // setState({...state,
    //  sender: "",
    //   receiver:"",
    //    reply:"",
    //     subject:"",
    //      text:""

    // })
      //  window.location = '/'
}

    return(

        <React.Fragment>
        <Navbar />
            <div className='container' style={myStyle} >
                <h1>Mail Sender</h1>
                <div className='jumbotron'>
                    <form onSubmit={onSub}>

                    <div className='row'>
                    <div className='form-group col-sm-6'>
                    <label htmlFor="Name">Sender Name</label>
                    <input type="text" name='name'onChange={onChaneName} value={state.name} className='form-control' />
                </div>
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

export default FormList;
