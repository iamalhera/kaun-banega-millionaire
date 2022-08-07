import { useEffect, useState } from "react";


const Quiz = ({data, setTimeStop, questionNumber, setQuestionNumber }) => {

    const [question, setQuestion] = useState(null) ;
    const [selectedAnswer, setSelectedAnswer] = useState(null) ;
    const [className, setClassName] = useState("answer") ;
   
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data, questionNumber]) ;

    const delay = (time, cb) =>{
        setTimeout(()=>{
            cb()
        },time) ;
    }

    const handleClick = (a) =>{
        setSelectedAnswer(a) ;
        setClassName("answer active") ;

        delay(3000, ()=>{setClassName(a.correct ? "answer correct" : "answer wrong")}) ;
        delay(6000, ()=>{
            if(a.correct){
                setQuestionNumber(prev => prev+1) ;
                setSelectedAnswer(null);
            }else{
                setTimeStop(true);
            }
        })
    }
    return (
        <div className="quiz-container">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=>(
                    <div key={a.id} className={selectedAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
                ))}
            </div>
        </div>
      );
}
 
export default Quiz;