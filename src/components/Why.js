import Img1 from "../images/trainer6.jpg"
import Img2 from "../images/image2.png"
import Img3 from "../images/image3.png"
import Img4 from "../images/image4.png"
import {FaClipboardList} from "react-icons/fa"
import { FaCheck } from "react-icons/fa";
import Head from "./Head"
import "./Why.css"
const Why =() => {
    return(
        <section className="why">
            <div className="container">
            <Head  head={'Reasons'} icon={<FaClipboardList/>} />
                <div className="why-container">
                    <article className="why-img">
                        <img src={Img1}/>
                        <img src={Img2}/>
                        <img src={Img3}/>
                        <img src={Img4}/>
                    </article>
                    <article className="why-txt">
                    <h1>Why Choose Us</h1>
                    <ul>
                        <li><FaCheck />OVER 140+ EXPERT COACHES</li>
                        <li><FaCheck /> TRAIN SMARTER AND FASTER THAN BEFORE</li>
                        <li> <FaCheck /> 1 FREE PROGRAM FOR NEW MEMBER</li>
                        <li> <FaCheck /> RELIABLE PARTNER</li>
                    </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Why