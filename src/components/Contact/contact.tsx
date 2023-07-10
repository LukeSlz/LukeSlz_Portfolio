import Loader from 'react-loaders';
import './contact.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const contact: string = "Contact me";
  const contactArr: string[] = contact.split(''); 

  const refForm = useRef;

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service',
      'template',
      refForm.current,
      'key'

    )
    
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArr={contactArr} idx={15} />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta aperiam recusandae amet vitae odio quas a itaque alias iste expedita, quidem officiis debitis enim laboriosam quibusdam, excepturi quis facere!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <div className="basic-data">
                  <li className="half">
                    <input type="text" name="name" id="name" placeholder='Name' required />
                  </li>
                  <li className="half">
                    <input type="email" name="email" id="name" placeholder='Email' required />
                  </li>
                </div>
                <li>
                  <input type="text" name="subject" id="subject" placeholder='Subject' required />
                </li>
                <li>
                  <textarea name="message" id="message" /* cols={500} rows={10} */ placeholder="Message" required /> 
                </li>
                <li>
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' active />
    </>
  )
}

export default Contact;