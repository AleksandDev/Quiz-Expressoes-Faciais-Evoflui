import { useContext, useEffect } from 'react';
import { QuizContext } from './componentes/context/quiz';
import './Questions.css'
import Option from './Options'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.question[quizState.currentQuestion];

  const onSelectOption = (option) => {
      dispatch({
          type: "CHECK_ANSWER",
          payload: { answer: currentQuestion.answer, option },
      });
  };

  return (
      <div id="question">
          <p>
              Pergunta {quizState.currentQuestion + 1} de {quizState.question.length}
          </p>
          <h2>{currentQuestion.question}</h2>

          {currentQuestion.image && (
              <div className="image-container">
                  <img
                      src={currentQuestion.image}
                      className="question-image"
                  />
              </div>
          )}

          <div id="options-container">
              {currentQuestion.options.map((option) => (
                  <Option
                      option={option}
                      key={option}
                      answer={currentQuestion.answer}
                      selectOption={() => onSelectOption(option)}
                      hide={quizState.optionToHide === option ? "hide" : null}
                  />
              ))}
          </div>

          {quizState.answerSelected && (
              <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                  Continuar
              </button>
          )}
      </div>
  );
};

export default Question;
