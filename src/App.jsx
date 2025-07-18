import { useState} from 'react'
import { Score } from './components/Score'
import "./styles/styles.css"
import { Pokemon } from './components/Pokemon';

function App() {
    const [score, setScore] = useState(0);

  return (
    <>
    <div className="header">
       <div>Memory Card Game</div>
       <div>
          <Score score={score} />
       </div>
    </div>
    
    </>
  )
}

export default App
