import Img from "../images/values.jpg";
import { MdDiamond } from 'react-icons/md';
import values from "../data/valueData"
import   './Values.css'
import Head from "./Head"

const Values = () => {
  return (
    <section className="values">
          <div className="container">

            <div className="values-container">
                  <article className="values-img">
                  <img src={Img} />
                  </article>
                  <article className="values-txt">
                  <Head head={ "Our Value"} icon={<MdDiamond/>} />

                         <p className="head-txt">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem omnis officia exercitationem, expedita similique,
                    laboriosam  .
                         </p>
                         <div className="value-content">
                         <div className="circle-1"></div>
                         <div className="circle-2"></div>
                         {
              values.map((item) => {
                return(
                  <div className="value glass" key={item.id}>
             
                                   <h5>{item.title}</h5>
                                   <p>
                                   {item.paragraph}
                                   </p>
                              </div>
                )
              })
            }
                             
                         </div>
                  </article>
            </div>
          </div>

    </section >
 
  );
};
export default Values;