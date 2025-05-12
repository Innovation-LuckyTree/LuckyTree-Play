import { useEffect, useState } from "react";
import * as gameService from "../../../services/gamesService";
import { WinCombination } from "../models/BetCombination";

export const useWinningDetail = (id:number) => {
  const [betCombinations, setBetCombinations] = useState<WinCombination[]>([])
  const [loading, setLoading] = useState(false);
  const [ error, setError] = useState<string | null>(null);

  const getGameList = async () => {
    setLoading(true);
    
    try{
      const response = await gameService.getWinDetails(id);
      setBetCombinations(response.data);
    }catch (err){
      let message = 'Opps. Something went wrong';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getGameList();
  },[])

  return {
    betCombinations,
    loading,
    error,
    getGameList
  }
}