import { useState } from "react";

export function Score({score}){
    const [bestScore, setBestScore] = useState(0);

    if(score > bestScore){
        setBestScore(score)
    }
    return (
        <>
            <div>score: {score}</div>
            <div>best score: {bestScore}</div>
        </>
    )
}