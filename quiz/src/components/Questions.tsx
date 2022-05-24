import React from "react";
import { Wrapper, ButtonWrapper } from "../components/Questions.style"
import {AnswerObject} from "../App"

type Props = {
  question: string,
  answers: string[],
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: AnswerObject | undefined,
  questionNo: number,
  totalQuestion: number
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNo, totalQuestion}) => (
<Wrapper>
  <p className="number">
    Question: {questionNo}/ {totalQuestion}
  </p>
  <p dangerouslySetInnerHTML={{__html: question}}></p>
  <div>
    {answers.map(answer => (
      <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
          <span dangerouslySetInnerHTML={{__html: answer}}></span>
        </button>
      </ButtonWrapper>
    ))}
  </div>
</Wrapper>)

export default QuestionCard;