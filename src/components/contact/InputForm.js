import React,{useState} from 'react';

function InputForm() {
  const [fname, setFname] = useState('First Name')
  const [lname, setLname] = useState('Last Name')
  const [phoneno, setPhone] = useState()
  const [email, setEmail] = useState('Email Address')
  const [message, setMessage] = useState('Message')
     const handleSubmit = (e) => {
    console.log('working')
    e.preventDefault();
    }
    const submitStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
    return <div className='input-form-container'>
        <form onSubmit={handleSubmit}>
            <input
            name='fname'
            type='text'
            value={fname}
            onChange={e => setFname(e.target.value)}
            />
             <input
            name='lname'
            type='text'
            value={lname}
            onChange={e => setLname(e.target.value)}
            />
             <input
            name='phoneno'
            type='number'
            value={phoneno}
            onChange={e => setPhone(e.target.value)}
            placeholder='Phone no'
            />
             <input
            name='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <textarea
                name="message"
                rows="4"
                cols="50"
                value={message}
                onChange={e=> setMessage(e.target.value)}
            >
            
            </textarea>
            <div style={submitStyle}>
                <input
                value='Submit'
                type='submit'
                />
            </div>
      </form>
  </div>;
}

export default InputForm;
