
import { useContext, useState, useEffect } from "react";
import { scoreContext } from "./Scoreboard";

export default function PlayerOne_side() {
    const { gameOver, setGameOver, p1_score, setP1_score, p2_score, p1_sets, p2_sets, setP1_sets, setP2_score } = useContext(scoreContext);
    const [term, setTerm] = useState();

    function handleClick() {
        if (gameOver == false) {
            setP1_score(p1_score + 1)
        }
    }


    function scoring() {
        if (p1_score >= 4 && p1_score >= p2_score + 2) {
            setP1_score(0);
            setP1_sets(p1_sets + 1)
            setP2_score(0);
        }
        if (p1_sets >= 6 && p1_sets >= p2_sets + 2) {
            let winner = document.querySelector('.winner');
            winner.innerHTML = "Player 1 Wins";
            let restart = document.querySelector('.restart');
            restart.style.display = "block";
            setGameOver(true);
        }
    }


    function pointDisplay() {
        switch (p1_score) {
            case 0:
                setTerm("Love");
                break;
            case 1:
                setTerm("15 Points");
                break;
            case 2:
                setTerm("30 Points");
                break;
            case 3:
                setTerm("40 Points");
                break;
        }
        if (p1_score >= 3 && p1_score == p2_score) {
            setTerm("Deuce");
        }
        else if (p1_score >= 4 && p1_score == p2_score + 1) {
            setTerm("Advantage");
        }
        else if (p1_score >= 3 && p1_score < p2_score) {
            setTerm("40 Points");
        }
    }

    useEffect(() => {
        pointDisplay();
        scoring();
    });

    return (
        <section className="p-side p1">
            <div className="score-box">
                <h3>SCORE:</h3>
                <p className="score-points">{p1_score}</p>
                <p className="term">{term}</p>
            </div>
            <div className="set-box">
                <h3>SETS:</h3>
                <p className="score-points">{p1_sets}</p>
            </div>

            <button className="addBtn" onClick={() => {
                handleClick();
            }}>Add score</button>
            <p className="status"></p>
        </section>
    )
}