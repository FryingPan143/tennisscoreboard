import { useState, createContext } from "react";
import PlayerOne_side from "./PlayerOne_side";
import PlayerTwo_side from "./PlayerTwo_side";
import Result from "./Result";
export const scoreContext = createContext();

export default function Scoreboard() {

    const [p1_score, setP1_score] = useState(0);
    const [p1_sets, setP1_sets] = useState(0);
    const [p2_score, setP2_score] = useState(0);
    const [p2_sets, setP2_sets] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState("");
    return (

        <section className="scoreboard">
            <scoreContext.Provider
                value={{
                    p1_score, setP1_score, p2_score, setP2_score,
                    p1_sets, setP1_sets, p2_sets, setP2_sets,
                    gameOver, setGameOver, winner, setWinner
                }}>
                <PlayerOne_side />
                <PlayerTwo_side />
                <Result />
            </scoreContext.Provider>
        </section>
    )
}