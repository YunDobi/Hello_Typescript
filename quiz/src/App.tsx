import React, {useState} from 'react';
import './App.css';
import QuestionCard from './components/Questions';
import { fetchQuestions } from './API';
import { Difficulty, QuestionState } from './API';

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}

const Total_Questions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, SetUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(
      Total_Questions, Difficulty.EASY
    )

    setQuestions(newQuestion)
    setScore(0);
    SetUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;
      console.log(answer)
      //check answer correct or not
      const correct = questions[number].correct_answer === answer;
      console.log(correct)
      //add score if the correct
      if (correct) setScore(prev => prev + 1);
      // save answer in the user answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      SetUserAnswer((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    //move on next question if not last question
    const nextQuestion = number + 1;

    if (nextQuestion === Total_Questions) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswer.length === Total_Questions ? (
        <button className='start' onClick={startTrivia}>
          start
        </button>
      ) : null}
      { !gameOver ? <p className='score'>score: </p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard 
        questionNo={number + 1} 
        totalQuestion={Total_Questions} 
        question={questions[number].question} 
        answers={questions[number].answer} 
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer} />
      )}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== Total_Questions - 1 ? (<button className='next' onClick={nextQuestion}>next Question</button>) : null}
    </div>
  );
}

export default App;
