import { useState } from "react";
import * as gameService from "../../../services/gamesService";
import { useGameStore } from "../../../app/store/useGameStore";

export const useGameList = () => {
  const { games, setGameList } = useGameStore();
  const [loading, setLoading] = useState(false);
  const [ error, setError] = useState<string | null>(null);

  const getGameList = async () => {
    setLoading(true);
    
    try{
      const response = await gameService.getPlayableGames();
      setGameList(response.data);
    }catch (err){
      let message = 'Opps. Something went wrong';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    games,
    loading,
    error,
    getGameList
  }
}