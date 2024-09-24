import React,{useRef} from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import facebookicon from '../../assets/facebook-icon.png'
import twittericon from '../../assets/twitter.png'
import youtubeicon from '../../assets/youtube.png'
import instagramicon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_35ha83j', 'template_ovs268n', form.current, {
          publicKey: 'ewtGf3KZdfM4mIRd2',
        })
        .then(
          () => {
            document.getElementById('msg').innerHTML="Email has been submitted!";
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <section id='contactPage'>
        <div className='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={walmart} alt='' className='clientImg'/>
                <img src={adobe} alt='' className='clientImg'/>
                <img src={microsoft} alt='' className='clientImg'/>
                <img src={facebook} alt='' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h2 className='contactPageTitle'>contact me</h2>
            <span className='contactDesc'>please fill out the form below to discuss any work opportunies</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name='user_name'/>
                <input type='email' className='email' placeholder='your email' name='user_email'/>
                <textarea className='msg' name='message' placeholder='your message' rows='5'></textarea>
                <button type='submit' value='send' className='submitBtn'>submit</button>
                <span id='msg'></span>
                <div className='links'>
                    <img src={facebookicon} alt='facebookicon' className='links' />
                    <img src={twittericon} alt='twittericon' className='links' />
                    <img src={youtubeicon} alt='youtubeicon' className='links' />
                    <img src={instagramicon} alt='instagramicon' className='links' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact