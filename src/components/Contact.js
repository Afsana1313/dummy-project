import React from 'react';
import '../style/contact.css';
import InputForm from './contact/InputForm';

import ContactInfo from './contact/ContactInfo';

function Contact() {
  
  const title = {
    color: `blue`,
    fontWeight: `light`,
    fontSize: 24
  }
 
  return <div className='contact-form-container'>
    <div className='contact-form'>
       <h2 style={title}>
          Get In Touch
      </h2>
      <InputForm
      
      />
            
    </div>
    <div className='contact-details'>
        <h2 style={title}>
          Contact Info
      </h2>
      <span>
        Feel free to contact me for any projects.
      </span>
      <ContactInfo/>
      
    </div>
  </div>;
}

export default Contact;
