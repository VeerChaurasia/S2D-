import React from 'react'
import './faq.css'
// import Cover from '../../assests/Instagram post - 78.svg'


const Faq = () => {

    const handleToggle = (e) => {
        
        const question = e.target 
        const answer = e.target.nextSibling 

        if(question.classList.contains('faq-accordion-question-button-active')) {
            question.classList.remove('faq-accordion-question-button-active')
            answer.classList.remove('faq-accordion-answer-active')
        } else {
            // // reset 
            const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
            const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            openQuestions?.forEach(item => item.classList.remove('faq-accordion-answer-active'))      
            openBtn?.forEach(btn => btn.classList.remove('faq-accordion-question-button-active'))

            question.classList.add('faq-accordion-question-button-active')           
            answer.classList.toggle('faq-accordion-answer-active')
        }
    }

    const data = [
        {
            id: 1,
            question: "Who can Participate?",
            answer: "Only Students of IITR are eligible to participate.",
        },
        {
            id: 2,
            question: "Maximum number of participants in the team?",
            answer: "Teams can be formed for a maximum of four participants.",
        },
        {
            id: 3,
            question: " What is the duration of the Hackhaton?",
            answer: "The Hackhaton will live for 36 Hours.Make sure to get your extension cable with you.",
        },
        {
            id: 4,
            question: "What can we build?",
            answer: "It is an Ethereum focused hackathon so any project that is built in the Ethereum ecosystem would be eligible for judging.",
        },
        {
            id: 5,
            question: "What if I have a question?",
            answer: " You can reach out to members of BlocSoc IITR for any queries you have in the StackTooDeep channel on our discord..",
        },
    ]

    return (
        <div name='Faq' className='faq-accordion df' >
            {/* <img src={Cover} className='cover'/> */}
           <div className="faq-accordion-container"
           data-aos="fade-in" data-aos-delay="250" data-aos-duration="500"
           >
               <div className="faq-accordion-content">
                   <h1 className="faq-accordion-title">FAQ</h1>

                    {data.map((item)=>(
                   <div className="faq-accordion-question" key={item.id}>
                        <button className="faq-accordion-question-button" 
                        onClick={handleToggle}> {item.question}
                        </button>
                        <div className="faq-accordion-answer">
                            <p> {item.answer}</p>
                        </div>
                   </div>
                    ))}
                    
               </div>
           </div>
        </div>
    )
}

export default Faq