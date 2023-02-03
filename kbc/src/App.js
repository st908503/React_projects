
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';

function App() {

  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" 0"); 

  const data = [

    {
      id: 1,
      question: "Rolex is a company that promotes which sort of brand",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "TV",
          correct: false,
        },
        {
          text: "Fridge",
          correct: false,
        },
      ]
    },
    {
      id: 2,
      question: "Who is president of India?",
      answers: [
        {
          text: "Rahul",
          correct: false,
        },
        {
          text: "Modi",
          correct: false,
        },
        {
          text: "Murmu",
          correct: true,
        },
        {
          text: "Sonia",
          correct: false,
        },
      ]
    },
    {
      id: 3,
      question: "Who is T20 format captain of Indian cricket team?",
      answers: [
        {
          text: "Hardik",
          correct: true,
        },
        {
          text: "Rohit",
          correct: false,
        },
        {
          text: "Kohli",
          correct: false,
        },
        {
          text: "Rahul",
          correct: false,
        },
      ]
    },




  ]

  const moneyPyramid = useMemo(() =>

    [
      {
        id: 1,
        amount: '₹ 5000'
      },
      {
        id: 2,
        amount: '₹ 10,000'
      },
      {
        id: 3,
        amount: '₹ 20,000'
      },
      {
        id: 4,
        amount: '₹ 40,000'
      },
      {
        id: 5,
        amount: '₹ 80,000'
      },
      {
        id: 6,
        amount: '₹ 1,60,000'
      },
      {
        id: 7,
        amount: '₹ 3,20,000'
      },
      {
        id: 8,
        amount: '₹ 6,40,000'
      },
      {
        id: 9,
        amount: '₹ 12,50,000'
      },
      {
        id: 10,
        amount: '₹ 25,00,000'
      },
      {
        id: 11,
        amount: '₹ 50,00,000'
      },
      {
        id: 12,
        amount: '₹ 1 Crore'
      },
      {
        id: 13,
        amount: '₹ 3 Crore'
      },
      {
        id: 14,
        amount: '₹ 7 Crore'
      },
    ].reverse(), [])

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])


  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? <h1 className='earnedText'>You Earned : {earned}</h1> : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}

          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((items) => {
                return (
                  <li className={questionNumber === items.id ? 'moneyListItem active' : 'moneyListItem'}>
                    <span className='moneyListItemNumber'>{items.id}</span>
                    <span className='moneyListItemAmount'>{items.amount}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ) : <Start setUserName={setUserName} />}

    </div>
  );
}

export default App;
