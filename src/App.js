import './App.css'
import Welcome from './componentes/welcome';
import { useContext } from 'react';
import Question from './data/questions';
import { QuizContext } from './componentes/context/quiz';
import { QuizProvider } from './componentes/context/quiz';

function App() {
  const [quizState] = useContext(QuizContext);

  return (
    <QuizProvider>
    <div className='App'>
      <h1>Descobrindo Expressões Faciais</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
    </QuizProvider>
  );
}

export default App;