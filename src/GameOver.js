import { useContext } from "react";

import { QuizContext } from "./componentes/context/quiz";


import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2 className="cl">Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.question.length} {" "}
        perguntas.
      </p>
      <img src='https://i.postimg.cc/8PB55Tb3/Person-Evoflui.png' alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;