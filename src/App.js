import { useEffect, useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';
import data from './data';

function App() {
  const quizData = data;
  const moneyPyramid = [
    { id: 1, amount: "₹ 1000" },
    { id: 2, amount: "₹ 5000" },
    { id: 3, amount: "₹ 10,000" },
    { id: 4, amount: "₹ 25,000" },
    { id: 5, amount: "₹ 50,000" },
    { id: 6, amount: "₹ 1,00,000" },
    { id: 7, amount: "₹ 5,00,000" },
    { id: 8, amount: "₹ 10,00,000" },
    { id: 9, amount: "₹ 15,00,000" },
    { id: 10, amount: "₹ 20,00,000" },
    { id: 11, amount: "₹ 25,00,000" },
    { id: 12, amount: "₹ 50,00,000" },
    { id: 13, amount: "₹ 75,00,000" },
    { id: 14, amount: "₹ 90,00,00,000" },
    { id: 15, amount: "₹ 1,00,00,000" },
  ].reverse();
  
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeStop, setTimeStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0 ");
  
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find(m => m.id === questionNumber -1).amount) ;
  },[moneyPyramid, questionNumber])

  return (
    <div className="App">
      <div className="content">
      {username ? (
        <>
        <div className="main">
          {timeStop ? <h1 className="endText">Thank You for playing {username}, You Earned : {earned} </h1> : 
            <>
            <div className="top">
            <div className='current-user'>Welcome {username}</div>
              <div className="timer">
                <Timer setTimeStop={setTimeStop} questionNumber={questionNumber} />
                </div>
            </div>
            <div className="bottom">
              <Quiz data={quizData} questionNumber={questionNumber} setTimeStop={setTimeStop} setQuestionNumber={setQuestionNumber} />
            </div>
          </>
          }
          </div>
        <div className="pyramid">
          <ul className="money-list">
            {moneyPyramid.map((moneyItem) => (
              <li key={moneyItem} className={questionNumber === moneyItem.id ? "money-list-item active" : "money-list-item"}>
                <span className="money-list-item-number">{moneyItem.id}</span>
                <span className="money-list-item-amount">{moneyItem.amount}</span>
              </li>
            ))
            }
          </ul>
        </div>
        </>
      ) : <Start setUsername={setUsername}/>}
      </div>
    </div>
  );
}

export default App;