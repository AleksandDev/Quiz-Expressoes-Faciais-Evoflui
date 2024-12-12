import './App.css'
import Welcome from './componentes/welcome';
import { useContext } from 'react';
import Question from './Questions';
import { QuizContext } from './componentes/context/quiz';
import GameOver from "./GameOver";


function App() {
  const [quizState] = useContext(QuizContext);

  return (
      <div className='App'>
        <h1 className='title'>Descobrindo Expressões Faciais</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
  );
}

export default App;