import { FC } from "react";
import { Button, Card, Flex, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { Content, Header } from "antd/es/layout/layout";
import { LeftOutlined } from "@ant-design/icons";
import { useWinningDetail } from "./hooks/useWinningDetail";


export const WinningDetailPage: FC = () => {
  const location = useLocation();
  const selectedBet = location.state;
  const navigate = useNavigate();
  const{betCombinations, loading } = useWinningDetail(selectedBet.id);

  return (
    <Layout className="w-screen h-screen overflow-hidden" >
      <Header  style={{background:"white", padding:0}}>
            <div className="w-full h-full flex justify-center items-center pr-4 relative">
              <Button type="text" style={{borderRadius:0, height:"64px", position:"absolute", left:0}} onClick={()=>{navigate(-1)}} icon={<LeftOutlined/>}/>
              <h2 className="text-md">Win Ticket</h2>
            </div>
      </Header>
      <Content className="p-4">
        <Card loading={loading}>
          <Flex vertical justify="center" align="center">
            <h2 className="text-lg font-bold">{selectedBet.gameTypeName}</h2>
            <h2>Ticket #: {selectedBet.id}</h2>
            <h2>{dayjs(selectedBet.transactionDate).format('MMM D YYYY, H mm A')}</h2>
            <Flex vertical className="w-full">
              <h2>Date: {selectedBet.drawDate.toLocaleString()}</h2>
              <h2>Draw: {selectedBet.drawTime}</h2>
              <h2>Combinations:</h2>
              {
                betCombinations?.map((betItem) => 
                  <pre>({betItem.betTypeId == 1 ? "S":"R"}) {betItem.combination}   ₱{betItem.amount}   Win: ₱{betItem.winnings}</pre>
              )
            }
            </Flex>
            <h2 className="text-lg font-bold">Total Amount Paid: ₱{selectedBet.totalBet}</h2>
          </Flex>
        </Card>
      </Content>
    </Layout>
  )
}