import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import "./welcome.css";


const Welcome = () => {
  const [, dispatch] = useContext(QuizContext);


  return (
    <div id="welcome">
      <div>
      <img src='https://i.postimg.cc/8PB55Tb3/Person-Evoflui.png' alt="Caio-person" />
      </div>
      <div className="seg">
      <h2 className="tgt">Seja bem-vindo(a)</h2>
      <p className="tgt">Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}> 
        Iniciar
      </button>
      </div>
      
    </div>
  );
};

export default Welcome;