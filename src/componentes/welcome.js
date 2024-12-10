import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import "./welcome.css";

import Person from './assets/images/PersonEvoflui.png';

const Welcome = () => {
  const [, dispatch] = useContext(QuizContext);


  return (
    <div id="welcome">
      <div>
      <img src={Person} alt="Caio-person" />
      </div>
      <div className="seg">
      <h2>Seja bem-vindo(a)</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}> 
        Iniciar
      </button>
      </div>
      
    </div>
  );
};

export default Welcome;