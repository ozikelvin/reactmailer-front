import React , {useState} from 'react';
import axios from 'axios';

function MultipleFormList(){

const [state, setState] = useState({
    sender:'',
    subject:'',
    body:'',
    reply:''
})

const [receiver, setReceiver] = useState([]);


const onChaneSender =(e)=> setState({...state,  sender: e.target.value })
const onChaneReceiver =(e)=> setReceiver([...receiver,  e.target.value ])
const onChaneBody =(e)=> setState({...state,  body: e.target.value })
const onChaneReply =(e)=> setState({...state,  reply: e.target.value })
const onChaneSubject =(e)=> setState({...state,  subject: e.target.value })

const myStyle ={
    marginTop: '30px'
}
const onSub=(e)=>{
    e.preventDefault();
    const mail = {
        sender: state.sender,
        receiver:receiver,
        reply:state.reply,
        subject:state.subject,
        body: state.body
    };
        console.log(mail)    
    axios.post('http://localhost:5000/multipleSend', mail)
    .then(res => {
            console.log(res.data);
   
    })
    .catch(err => console.log(err));
    setState({...state,
     sender: "",
       reply:"",
        subject:"",
         body:""
    })
    setReceiver([...receiver, ''])
}

    return(
        <React.Fragment>
            <div className='container' style={myStyle} >
                <h1>Multiple Mail Sender</h1>
                <div className='jumbotron'>
                    <form onSubmit={onSub}>

                    <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="Sender">Sender</label>
                    <input type="text" name='sender'onChange={onChaneSender} value={state.sender} className='form-control' />
                </div>
                    <div className='form-group col-sm-6'>
                    <label htmlFor="Receiver">Receiver</label>
                    <input type="text" name='receiver' onChange={onChaneReceiver} value={receiver} className='form-control' />
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
                        <textarea name="body" className='form-control' cols='49' rows='5'  onChange={onChaneBody} value={state.body}></textarea>
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

export default MultipleFormList;