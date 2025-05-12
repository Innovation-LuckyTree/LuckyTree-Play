import { useState } from "react"
import { Game } from "../../home/models/game"
import { useLocation } from "react-router-dom";


export const useGameState = () => {
    const location = useLocation();
    const gameType = location.state as Game;
    const [game, setSelectedGame] = useState<Game>(gameType);
    const [currentDraw, setCurrentDraw] = useState();

    return{
        game,
        currentDraw,
        setSelectedGame
    }
}