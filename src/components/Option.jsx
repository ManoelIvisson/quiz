import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"

const Option = ({ option, answer, selectOption, hide }) => {
    const [quizState, dispatch] = useContext(QuizContext)
    console.log(hide)

    return (
        <div className={`option ${quizState.answerSelected && answer == option ? "correct" : ""} ${quizState.answerSelected && answer != option ? "wrong" : ""} 
        ${hide ? "hide" : ""} `} onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}

export default Option