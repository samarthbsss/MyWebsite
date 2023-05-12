import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import styles from '../Css/contact.css'

export const Contact =()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
  
      emailjs.send('service_gddn7sa', 'template_unqriku', templateParams, '5TpgmwBFIoimtU3j9')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
  
      setName('');
      setEmail('');
      setMessage('');
    };

    return <>
        <div className="contact">
            <h1>Send me a message!</h1>
            <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                <div>
                <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send Message</button>
    </form>
                </div>

        </div>
    </>
}