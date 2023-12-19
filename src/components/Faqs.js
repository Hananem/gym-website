import   './Faqs.css'

import { BsQuestionLg } from 'react-icons/bs';
import faqs from '../data/FaqsData'
import Head from "./Head"
import Faq from './Faq'
const Faqs = () => {

  return (
    <section className="faqs">
       <div className='container'>
       <Head head={"Faq"} icon={<BsQuestionLg/>} />
          <div className='faqs-container'>
               {
                faqs.map(({id, answer, question}) => {
                  return <Faq key={id}  question={question} answer={answer}   />
                  
                })
               }
          </div>
       </div>

    </section>
 
  );
};
export default Faqs;