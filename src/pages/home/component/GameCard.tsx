import { Card } from "antd";
import { FC } from "react";
import { Game } from "../models/game";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: Game
}

export const GameCard: FC<GameCardProps> = ({game}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game',{state:game});
  }
 return (
  <Card className="w-xs flex flex-col items-center min-h-30" onClick={handleClick}>
    <h2 className="font-bold text-center">{game.label}</h2>
    <h2>{game.description}</h2>
  </Card>
 )
}