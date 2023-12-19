import{ Link } from 'react-router-dom'
import  './Hero.css'
import Img from "../images/header.png";
import { motion } from "framer-motion"

const Hero = () => {
  const transition = {type:'spring',  duration:3}
  return (
    <section className='hero'>
        <div className="container">
            <div className='hero-container'>
                   <article className='hero-txt'>
                   <div className="circle-1"></div>
                  <div className="animation">
                  <motion.div
                  initial={{left:'230px'}}
                  whileInView={{left:'8px'}}
                  transition={{...transition, type:'tween'}}
                  >

                  </motion.div>
                   <span >#100_Days_Of_WorkOut</span>
                   </div>
                  <h1>Build The Perfect Body Shape For Good And Healthy Life.</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia exercitationem, expedita similique,
                    laboriosam  .
                    </p>           
                    <article className="numbers">
                    <div>
                    <span>+887</span>
                    <span>members joined</span>
                      
                    </div>

                    <div>
                    <span>+200</span>
                    <span>expert coaches</span>
                      
                    </div>

                    <div>
                    <span>+45</span>
                    <span>fitness programs</span>
                      
                    </div>
                    </article>
                      <Link className="btn" >
                          Get Started
                      </Link>
                   </article>
                   <article className='hero-img'>
                      <img src={Img} />
                   </article>
            </div>
        </div>
    </section>
  );
};
export default Hero;