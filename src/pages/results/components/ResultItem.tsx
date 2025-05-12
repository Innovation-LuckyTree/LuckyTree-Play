import { Card, Col, Flex } from "antd";
import { FC } from "react";
import { Result } from "../models/Result";
import dayjs from "dayjs";

interface ResultItemProps{
  result: Result;
}

export const ResultItem: FC<ResultItemProps> = ({result}) => {
  return (
    <Card size="small" style={{marginBottom:"2px"}}>
      <Flex justify="space-between" align="center">
        <Col>
          <h2>{result.gameTypeName}</h2>
          <h2 className="font-bold">{dayjs(result.drawDate).format('MMM D YYYY')}, {result.drawTime}</h2>
          <h2 className="text-xs">Posted: <b>{result.datePosted.toLocaleDateString()}</b></h2>
        </Col>
        <h2 className="font-bold text-3xl">{result.result}</h2>
      </Flex>
    </Card>
  )
}