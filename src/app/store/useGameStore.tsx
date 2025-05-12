import { create } from "zustand";
import { Game } from "../../pages/home/models/game";
import { devtools, persist } from "zustand/middleware";

interface GameListState{
  games: Game[];
  setGameList: ( games: Game[]) => void;
}

export const useGameStore = create<GameListState>()(
  devtools(
    persist(
      (set)=>({
        games: [],
        setGameList:(games:Game[])=>{
          set({games:games},false,'setGameList')
        }
      }),
      {
        name: "gamelist-storage"
      }
    ),
    {name: "GameListStore"}
  )
);