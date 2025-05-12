import { Card, Col, Flex } from "antd";
import { FC } from "react";
import dayjs from "dayjs";
import { CreditTransaction } from "../models/CreditTransaction";
import { ClockCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";

interface CreditItemProps{
  credit: CreditTransaction;
}

export const CreditItem: FC<CreditItemProps> = ({credit}) => {
  return (
    <Card size="small" style={{marginBottom:"2px"}}>
      <Flex justify="space-between">
        <Col>
          <h2 className="text-md">From: <b>{credit.senderName}</b></h2>
        </Col>
        <Col className="flex flex-col items-end">
          <h2 className="text-xs"><ClockCircleOutlined/> {dayjs(credit.transactionDate).format('MMM D, YYYY HH:MM A')}</h2>
          <h2 className="text-md"><DollarCircleOutlined/> <b>{credit.amount.toFixed(2)}</b></h2>
        </Col>
      </Flex>
    </Card>
  )
}