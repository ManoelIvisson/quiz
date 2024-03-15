import { QuizContext } from '../context/quiz'
import { useContext } from 'react'

import Option from './Option'

import './Question.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  function onSelectAnswer(option) {
    dispatch({type: "CHECK_ANSWER", payload: {answer: currentQuestion.answer, option}})
  }

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => 
          <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectAnswer(option)} hide={quizState.optionHide == option ? "hide" : null} />
        )}
      </div>
      {quizState.answerSelected ? 
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button> : 
        (quizState.optionHide == null && (
        <button onClick={() => dispatch({type: "REMOVE_OPTION"})}>Exluir uma</button>))
      }
    </div>
  )
}

export default Question