import { useState } from "react";
import { Score } from "./components/Score";
import "./styles/styles.css";
import { Pokemon } from "./components/Pokemon";

function App() {
  const [score, setScore] = useState(0);
  const [unselectedCards, setUnSelectedCards] = useState(new Set());

  function handleUnSelectedCards(pokemonUrl) {
    let tempUnSelectedPokemon = unselectedCards;
    if (!unselectedCards.has(pokemonUrl)) {
      tempUnSelectedPokemon.add(pokemonUrl);
      setScore(score+1);
    } else {
      setUnSelectedCards(new Set());
      setScore(0);
    }
  }

  return (
    <>
      <div className="header">
        <div>Memory Card Game</div>
        <div>
          <Score score={score} hasReset={score} />
        </div>
      </div>
      <Pokemon handleUnSelectedCards={handleUnSelectedCards} />
    </>
  );
}

export default App;