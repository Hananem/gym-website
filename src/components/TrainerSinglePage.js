
import trainers from '../data/trainersData'
import {   useParams } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import {AiFillInstagram } from 'react-icons/ai';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./TrainerSinglePage.css"

const TrainerSinglePage = () => {
    const {trainersId} = useParams()
    const trainer =trainers.find((trainer) => trainer.id === trainersId)
    return(
      <section className="trainer-single-page">
<div className="trainer-container ">

<div className="trainer-image">
<img src={trainer.image} />

</div>

<div className='single-trainer-info glass'>
     
      <h2>{trainer.name}</h2>
      <p> {trainer.specialty} </p>

      <p className="desc">{trainer.desc}</p>
  

      <div className="trainer-icons">
                              <FaFacebook />
                              <AiFillInstagram />
                              <FaLinkedin />
                                <FaTwitter />
                              </div>
                      
      </div>
    </div>
      </section>
    )
}

export default TrainerSinglePage