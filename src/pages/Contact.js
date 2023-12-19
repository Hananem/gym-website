import React from 'react'

import { CiMail } from 'react-icons/ci';
import { SiMessenger } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import "./Contact.css"
import  Footer from '../components/Footer'
import Head from "../components/Head"


const Contact = () => {
  
  return (
    <section className='contact'>

        <div className='container'>
  <Head head={"Contact"} icon={<CiMail />} />

          <div className='contact-container '>
         
              <a>  <CiMail /></a>
              <a>     <SiMessenger /> </a>  
              <a>     <BsWhatsapp /> </a>  
          </div>
        </div>
        <Footer/>
    </section>
  );
};

export default Contact;
