import './App.css';
import { useState } from 'react'
import Quiz from './components/Quiz';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizState, setQuizState] = useState('Start')

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-limoDark select-none">
      <Quiz currentQuestion={currentQuestion} setCurrentQuestion={(currentQuestion) => setCurrentQuestion(currentQuestion)} setQuizState={(quizState) => setQuizState(quizState)} quizState={quizState} />
      <p className="fixed left-3 bottom-3 px-2 py-1 text-xs bg-white text-limoDark rounded-md">Limo Planet Quiz</p>
    </div>
  );
}

export default App;