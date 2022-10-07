import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm () {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
        console.log('Submit Form', formState);
        }
    };
    
    return (
        <section style={{ backgroundColor: '#D6F9DD', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='main'>
          <h1>Contact Me!</h1>
          <form action="https://public.herotofu.com/v1/656a31d0-4680-11ed-a484-c1a2ba854bab" method="post" target="_blank">
            <div style={{ width: '100%', backgroundColor: '#EFBC9B', borderRadius: '5px' }}>
              <h4 style={{ paddingTop: '10px' }}>Name</h4>
              <input style={{ marginBottom: '5px' }} type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div style={{ width: '100%', backgroundColor: '#EFBC9B', borderRadius: '5px' }}>
              <h4 style={{ paddingTop: '10px' }}>Email</h4>
              <input style={{ marginBottom: '5px' }} type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div style={{ width: '100%', backgroundColor: '#EFBC9B', borderRadius: '5px' }}>
              <h4 style={{ paddingTop: '10px' }}>Message</h4>
              <textarea style={{ marginBottom: '5px', width: '70%' }} name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p>{errorMessage}</p>
              </div>
            )}
            <button style={{ margin: '10px' }} type="submit">Submit</button>
          </form>
        </section>
      );
}

export default ContactForm;