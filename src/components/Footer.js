import {Link} from "react-router-dom"
import { FaFacebook } from 'react-icons/fa';
import {AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
    return(
     <section className="footer glass">
       <div className="container">
           <div className="circle-1"></div>
           <div className="circle-2"></div>
           <div className="footer-container ">
       

               <article>
                <Link to="/" className="logo">
                 GYM
                </Link>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia exercitationem,
                </p>

                <div className="footer-icons">
                   <a>
                   <FaFacebook />

                   </a>
                   <a>
                   <AiFillInstagram />

                   </a>
                   <a>
                   <FaTwitter />

                   </a>
                   <a></a>
                </div>
               </article>
               <article>
                <h4>Permalinks</h4>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Trainers</Link>
                <Link>Gallery</Link>
                <Link>Contacts</Link>
               </article>

               <article>
                <h4>Permalinks</h4>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Trainers</Link>
                <Link>Gallery</Link>
                <Link>Contacts</Link>
               </article>
               <article>
                <h4>Get In Touch</h4>
                <Link>Contact Us</Link>
               </article>
           </div>
       </div>
       <div className="footer-copyright">
           <p>2023 Gym Website &copy; All Rights Reserved</p>
       </div>
     </section>
    )
}

export default Footer