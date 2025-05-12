import { Flex } from "antd";
import { FC } from "react";
import { useGameList } from "./hooks/useGameList";
import { GameCard } from "./component/GameCard";

export const HomePage: FC = () => {
  const {games} = useGameList();

  return(
    <Flex vertical>
      <h2 className="font-bold text-lg">Play Games</h2>
      <Flex>
        {
          games.map((e)=>
            <GameCard game={e}/>
          )
        }
      </Flex>
    </Flex>
  )
}