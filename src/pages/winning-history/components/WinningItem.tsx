import { Card, Col, Flex } from "antd";
import { FC } from "react";
import dayjs from "dayjs";
import {  useNavigate } from "react-router-dom";
import { Winning } from "../models/Winning";

interface WinningItemProps{
  winning: Winning;
}

export const WinningItem: FC<WinningItemProps> = ({winning}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('detail',{state:winning});
  }

  return (
    <Card size="small" style={{marginBottom:"2px"}} onClick={handleClick}>
      <Flex justify="space-between" align="center">
        <Col>
          <h2 className="text-md">Ticket # <b>{winning.id}</b></h2>
          <h2 className="text-md">Total Straight Win <b>{winning.totalStraightWin}</b></h2>
          <h2 className="text-md">Total Rumble Win <b>{winning.totalRumbleWin}</b></h2>
        </Col>
        <Col>
          <h2 className="text-md">{winning.gameTypeName}</h2>
          <h2 className="font-bold">{dayjs(winning.drawDate).format('MMM D YYYY')}, {winning.drawTime}</h2>
          <h2 className="text-md">Total Winning <b>{winning.totalWinnings}</b></h2>
        </Col>
      </Flex>
    </Card>
  )
}