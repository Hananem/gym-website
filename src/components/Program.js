
import { Link } from 'react-router-dom';
import { IoMdArrowDropright  } from "react-icons/io";
import {FaCrown} from "react-icons/fa";
import './Program.css'
import program from "../data/ProgramData"
import Head from "./Head"
const Program = () => {
  return (
     <section class="program">
          <div className='container'>
      <Head head={Program} icon={<FaCrown />} />
              <div className='program-container '>
              <div className="circle-1"></div>
              <div className="circle-2"></div>

              {program.map((program) => {
                return(
                    <article className="program-item glass">
                      <span className="icon"> {program.icon} </span>
                        <h5>{program.title}</h5>
                        <p>
                           {program.paragraph}
                        </p>
                        <Link className="">
                               Learn More <IoMdArrowDropright />
                        </Link>
                     </article>
                )
              })}
                   

                 
              </div>
          </div>
     </section>
  );
};
export default Program;