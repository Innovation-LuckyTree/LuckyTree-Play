import { ClockCircleFilled } from "@ant-design/icons";
import { Flex, Row } from "antd";
import { FC } from "react";

interface ScheduleResultsProps{
    drawTime: string;
    combination: string;
}

export const ScheduleResults: FC<ScheduleResultsProps> = ({ drawTime, combination }) => {
  const spanClass = "p-1 bg-white w-[22px] h-[22px] leading-none rounded-xl text-center m-0.5 font-bold";

  return(
  <Flex flex={1} vertical justify="flex-end" style={{background: "linear-gradient(45deg, rgb(0, 64, 121), rgb(0, 30, 57))", padding:4, borderRadius:6}}>
    <h2 className="text-[10px] text-right text-white"><ClockCircleFilled/> {drawTime}</h2>
    <Row justify="center">
      {combination != "" ?
        combination.split("-").map((digit)=>
          <span className={spanClass}>{digit}</span>
        )
        :
        <>
          <span className={spanClass}>-</span>
          <span className={spanClass}>-</span>
          <span className={spanClass}>-</span>
        </>
      }
    </Row>
  </Flex>
  )
};