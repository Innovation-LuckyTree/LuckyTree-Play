import { Card, Col, Flex } from "antd";
import { FC } from "react";
import { Bet } from "../models/Bet";
import dayjs from "dayjs";
import {  useNavigate } from "react-router-dom";

interface BetItemProps{
  bet: Bet;
}

export const BetItem: FC<BetItemProps> = ({bet}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('detail',{state:bet});
  }

  return (
    <Card size="small" style={{marginBottom:"2px"}} onClick={handleClick}>
      <Flex justify="space-between" align="center">
        <Col>
          <h2 className="text-md">Ticket # <b>{bet.id}</b></h2>
          <h2 className="text-md">Total Straight <b>{bet.totalStraight}</b></h2>
          <h2 className="text-md">Total Rumble <b>{bet.totalRumble}</b></h2>
        </Col>
        <Col>
          <h2 className="text-md">{bet.gameTypeName}</h2>
          <h2 className="font-bold">{dayjs(bet.drawDate).format('MMM D YYYY')}, {bet.drawTime}</h2>
          <h2 className="text-md">Total Bet <b>{bet.totalBet}</b></h2>
        </Col>
      </Flex>
    </Card>
  )
}