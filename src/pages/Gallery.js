import React from 'react'
import gallery1 from "../images/gallery1.jpg"
import gallery2 from "../images/gallery2.jpg"
import gallery3 from "../images/gallery3.jpg"
import gallery4 from "../images/gallery4.jpg"
import gallery5 from "../images/gallery5.jpg"
import gallery6 from "../images/gallery6.jpg"
import gallery7 from "../images/gallery7.jpg"
import gallery8 from "../images/gallery8.jpg"
import gallery9 from "../images/gallery9.jpg"
import gallery10 from "../images/gallery10.jpg"
import {BsImage} from "react-icons/bs"
import "./Gallery.css"
import Head from "../components/Head"


const Gallery = () => {

  return (
  
      <section className='gallery'>
      <div className="container">
  <Head head={"Gallery"} icon={<BsImage/>} />

        <div className="gallery-container">
        <article>
            <div className='gallery-img'>
              <img src={gallery1} />
            </div>
            <div className='gallery-img'>
              <img src={gallery2} />
            </div>

            <div className='gallery-img'>
              <img src={gallery3} />
            </div>
</article>
<article>
            <div className='gallery-img'>
              <img src={gallery4} />
            </div>

            <div className='gallery-img'>
              <img src={gallery5} />
            </div>

            <div className='gallery-img '>
              <img src={gallery6} />
            </div>
</article>
<article>
            <div className='gallery-img'>
              <img src={gallery7} />
            </div>

            <div className='gallery-img'>
              <img src={gallery8} />
            </div>

            <div className='gallery-img '>
              <img src={gallery9} />
            </div>
</article>
<article>
            <div className='gallery-img'>
              <img src={gallery10} />
            </div>
            <div className='gallery-img'>
              <img src={gallery4} />
            </div>

            <div className='gallery-img'>
              <img src={gallery5} />
            </div>
            </article>
        </div>
          
        </div>
      </section>
  
  );
};

export default Gallery;
