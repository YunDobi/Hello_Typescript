import React, {useState} from 'react';
import './App.css';
import QuestionCard from './components/Questions';
import { fetchQuestions } from './API';
import { Difficulty, QuestionState } from './API';

const Total_Questions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, SetUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuestions(Total_Questions, Difficulty.EASY))

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        start
      </button>
      <p className='score'>score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
      questionNo={number + 1} 
      totalQuestion={Total_Questions} 
      question={questions[number].question} 
      answers={questions[number].answer} 
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer} /> */}
      <button className='next' onClick={nextQuestion}>next Question</button>
    </div>
  );
}

export default App;
