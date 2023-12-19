import React from 'react'
import trainers from '../data/trainersData'
import { FaFacebook } from 'react-icons/fa';
import {AiFillInstagram } from 'react-icons/ai';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import "./Trainers.css"
import Head from "../components/Head"
import {SiOpenaigym} from "react-icons/si"

const Trainers= () => {


  return (
    <section className='trainers'>
        <div className="container">
  <Head head={"Trainers"} icon={<SiOpenaigym/>} />

        <div className="trainers-container ">
        <div className="circle-1"></div>
              <div className="circle-2"></div>
               {
                trainers.map((item) => {
                  return(
                    <Link to={`/trainers/${item.id}`}>
                    <article key={item.id} className="trainer glass">
                    <div className="trainer-img">
                    <img src={item.image} />
                       
                    </div>
                          <div className="trainer-info">
                              <h6>{item.name}</h6>
                              <p> {item.specialty} </p>

                              <div className="trainer-icons">
                              <FaFacebook />
                              <AiFillInstagram />
                              <FaLinkedin />
                                <FaTwitter />
                              </div>
                          </div>
                    </article>
                    </Link>
                  )
                })
               }
        </div>
          
        </div>
    </section>
  );
};
export default Trainers;
