import Loader from 'react-loaders';
import './contact.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const email: string = "lucassy07@outlook.com";

  const [letterClass, setLetterClass] = useState('text-animate');
  const contact: string = "Contact me";
  const contactArr: string[] = contact.split(''); 

  const refForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (refForm.current) {
      emailjs.sendForm(
        'default_service',
        'template_z16q55n',
        refForm.current,
        'uNNcxYIsaFnPXSnZS'
      )
        .then(
          (res) => {
            alert('Message successfully sent!');
            console.log("Success!!", res.status, res.text);
            window.location.replace('https://lukeslz.github.io/Portfolio/');
          },
          (error) => {
            alert('Failed to send the message, please try again');
            console.log(error);
            
          }
        )
    }
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArr={contactArr} idx={15} />
          </h1>
          <p>
            As a versatile developer with a keen interest in front-end, back-end, and full-stack projects, I am passionate about continuously learning and improving my skills. I approach each day with a drive to expand my knowledge and explore new technologies. I have engaged in numerous academic projects that have honed my abilities. I am now eagerly seeking opportunities to apply my problem-solving mindset and contribute to meaningful solutions. Let's connect and embark on a journey of innovation and growth together.
          </p>
          <p>
            You can contact me using this form or with a direct <a id='email' href={"mailto:" + email}>email.</a>
          </p>
          <div className="contact-form">
            <form ref={refForm as React.RefObject<HTMLFormElement>} onSubmit={sendEmail}>
              <ul>
                <div className="basic-data">
                  <li className="half">
                    <input type="text" name="name" id="name" placeholder='Name' required />
                  </li>
                  <li className="half">
                    <input type="email" name="email" id="email" placeholder='Email' required />
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