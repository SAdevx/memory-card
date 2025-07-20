import { useEffect, useRef, useState } from "react";

export function Score({score}){
    const [bestScore, setBestScore] = useState(0);
    const prevScore = useRef(0);

    useEffect(() => {
        if(score == 0){
            if(prevScore.current > bestScore){
                setBestScore(prevScore.current);
            }
        }
        prevScore.current = score;

    },[bestScore, score]);

    if(score > prevScore.current){
        prevScore.current = score;
    }

    return (
        <>
            <div>score: {score}</div>
            <div>best score: {bestScore}</div>
        </>
    )
}