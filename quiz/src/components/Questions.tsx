import React from "react";

type Props = {
  question: string,
  answers: string[],
  callback: any,
  userAnswer: any,
  questionNo: number,
  totalQuestion: number
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNo, totalQuestion}) => (
<div>
  <p className="number">
    Question: {questionNo}/ {totalQuestion}
  </p>
  <p dangerouslySetInnerHTML={{__html: question}}></p>
  <div>
    {answers.map(answer => (
      <div>
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{__html: answer}}></span>
        </button>
      </div>
    ))}
  </div>
</div>)

export default QuestionCard;