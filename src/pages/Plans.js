import plan from "../data/PlansData"
import "./Plans.css"
import  Footer from '../components/Footer'
import {SiOpenaigym} from "react-icons/si"
import Head from "../components/Head"


const Plans = () => {
    return(
       <section className="plans">
       <div className="container">
       <Head head={"Plans"} icon={<SiOpenaigym/>} />

          <div className="all-plans">

             <div className="plans-container">
             {plan.map((plan) => {
                return(
                   <article id={plan.id} className="plan glass">
                       <span className="icon">{plan.icon}  </span>
                       <h5>{plan.plan}</h5>
                       <h2>$ {plan.price} </h2> 
                       <ul>
                        <li> {plan.time}  </li>
                        <li> {plan.coaches}  </li>
                        <li> {plan.access}  </li>
                       </ul>
                       <a>Join Now</a>
                   </article>     
                )
             })}
                
             </div>
          </div>
          </div>
          <Footer />
       </section>
    )
}

export default Plans