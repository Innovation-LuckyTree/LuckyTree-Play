import { Card, Col, Flex } from "antd";
import { FC } from "react";
import dayjs from "dayjs";
import { ClockCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { CreditTrack } from "../models/CreditTrack";

interface CreditTrackItemProps{
  credit: CreditTrack;
}

export const CreditTrackItem: FC<CreditTrackItemProps> = ({credit}) => {
  return (
    <Card size="small" style={{marginBottom:"2px"}}>
      <Flex justify="space-between">
        <Col>
          <h2 className="text-md">{credit.transactionDescription}</h2>
          <h2 className="text-xs"><ClockCircleOutlined/> {dayjs(credit.transactionDate).format('MMM D, YYYY HH:MM A')}</h2>
        </Col>
        <Col className="flex flex-col items-end">
          <h2 className="text-md"><DollarCircleOutlined/> {credit.balance.toFixed(2)}</h2>
          <h2 className="text-md" style={{color: credit.amount > 0 ? "green" : "red"}}><b>{(credit.amount>0 ? "+":"") + credit.amount.toFixed(2)}</b></h2>
        </Col>
      </Flex>
    </Card>
  )
}