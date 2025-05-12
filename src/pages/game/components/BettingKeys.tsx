import { Button, Card, Col, Flex, Row } from "antd";
import { CSSProperties, FC, useState } from "react";
import { mockGameSchedules } from "../../../utils/mocks";
import { InputCard } from "./InputCards";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useGameState } from "../hooks/useGameState";
import { useBettingStore } from "../hooks/useBettingStore";

export const BettingKeys: FC = () => {
  const {game} = useGameState();
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const { selectedStep, setSelectedStep, combination, straightAmount, rumbleAmount, handleKeys, handleClear, addCombination } = useBettingStore();

  const buttonClass: CSSProperties ={
    background:"white",
    textAlign:"center",
    padding: "2.1rem 0rem 2.1rem 0rem",
    fontSize: "1.6rem",
    fontWeight:"500",
    borderRadius: "8px"
    };

  return(
    <Flex vertical gap={8}>
      
      <Card styles={{body: {padding:8}}}>
        <Flex gap={8}>
          {mockGameSchedules.map((gameSched)=>
            <Button
              className="flex-1"
              color="orange"
              variant={selectedSchedule == gameSched.id ? "solid": "outlined"}
              disabled={!(gameSched.isOpen || gameSched.allowAdvance)}
              onClick={()=> setSelectedSchedule(gameSched.id)}
            >
              <b>{gameSched.drawTime}</b>
            </Button>
          )}
        </Flex>
      </Card>
      <Flex gap={2}>
        <InputCard
          title="Combination"
          value={combination}
          isSelected ={selectedStep == 1}
          onClick={()=>setSelectedStep(1)}
          placeholder={game.digits == 2 ? "0-0": "0-0-0"}
        />
        <InputCard
          title="Straight"
          value={straightAmount}
          isSelected ={selectedStep == 2}
          onClick={()=>setSelectedStep(2)}
          placeholder="0"
        />
        <InputCard
          title="Rumble"
          value={rumbleAmount}
          isSelected ={selectedStep == 3}
          onClick={()=>setSelectedStep(3)}
          placeholder="0"
        />
      </Flex>
      <Flex flex={1} vertical>
        <Row gutter={[6,6]}>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("1")}>1</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("2")}>2</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("3")}>3</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("4")}>4</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("5")}>5</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("6")}>6</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("7")}>7</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("8")}>8</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("9")}>9</Button></Col>
          <Col span={8}><Button block style={{...buttonClass, background: "orange", color:"white", fontSize:"16px"}} onClick={()=>addCombination()}>Add Bets</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleKeys("0")}>0</Button></Col>
          <Col span={8}><Button block style={buttonClass} onClick={()=>handleClear()}><CloseCircleOutlined/></Button></Col>
        </Row>
      </Flex>
    </Flex>
  )
}