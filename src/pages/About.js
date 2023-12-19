import React from 'react'

import Img from "../images/BenefitsPageGraphic.png"
import  Testimonials from '../components/Testimonials'
import  Footer from '../components/Footer'
import Head from "../components/Head"
import {AiFillFire} from "react-icons/ai"
import "./About.css"
const About = () => {
  return (
    <section>
     
   <div className="container">
   <Head head={"About Us"} icon={<AiFillFire/>} />

      <article className="about-container">
        <div className="about-img">
        <img src={Img} />
        </div>
        <div className="about-txt">
          <h1>
            Thousand of clients are getting fit
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia exercitationem, expedita similique,
         laboriosam incidunt fuga eius corrupti inventore unde hic reprehenderit tenetur tempore vel iste minima consectetur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia exercitationem, expedita similique,.</p>
         <a href='#' className="btn">Join Us</a>
        </div>

      </article>
      </div>
   <Testimonials />
<Footer/>
      </section>
  );
};
export default About;
