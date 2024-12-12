import { useContext } from "react";

import { QuizContext } from "./componentes/context/quiz";

import "./Options.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState,] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;