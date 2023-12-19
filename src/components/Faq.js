import  {useState } from 'react'
import   './Faqs.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
const Faq = ({question, answer}) => {
    const [ isAnswerShowing, setIsAnswerShowing] = useState(false)
  
    return(
        <article className="faq  glass" >
        <div className="question">
       <h4> {question}</h4>
        <button className='faq-btn' onClick={( ) =>setIsAnswerShowing(prev => !prev)}  >
       
       { isAnswerShowing ?  <AiOutlineMinus /> :  <AiOutlinePlus />}
        </button>
        </div>
{ isAnswerShowing &&   <p>  {answer}  </p>}
       
      </article>
    )
}

export default Faq