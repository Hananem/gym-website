
import  './Testimonials.css'
import testimonials from '../data/testimonialsData'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import {ImQuotesLeft} from "react-icons/im"
// import required modules
import { Navigation } from "swiper";
import Head from "./Head"

const Testimonials = () => {
  return (
    <section className="testimonials">

        <div className="container">
       <Head head={"Testimonials"} icon={<ImQuotesLeft/>} />

            <div className="testimonials-container">
            <div className="circle-1"></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 { testimonials.map((item) => {
                    return(
                      <SwiperSlide>
                        <article key={item.id}  className="testimonial  glass">
                        <div className="testimonial-img">
                        <img src={item.image} />

                        </div>
                            <p> {item.testimonial} </p>
                            <span> {item.name}  </span>
                        </article>
                        </SwiperSlide>
                    )
                 })

                 }

                    </Swiper>
            </div>
        </div>
    </section>
 
  );
};
export default Testimonials;