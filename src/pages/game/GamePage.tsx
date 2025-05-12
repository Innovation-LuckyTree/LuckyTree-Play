import { LeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Flex, Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { FC, useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom";
import { DrawHeaders } from "./components/DrawHeaders";
import { BettingKeys } from "./components/BettingKeys";
import { useGameState } from "./hooks/useGameState";
import { BettingCheckout } from "./components/BettingCheckout";
import { useBettingStore } from "./hooks/useBettingStore";
import { cancellationModal } from "../../utils/helpers";

export const GamePage: FC = () => {
  const [openCheckout, setOpenCheckout] = useState(false);
  const navigate = useNavigate();
  const {game} = useGameState();
  const {setDigits, cartItems, reset} = useBettingStore();

  const handleBack = () => {
    if(openCheckout){
      setOpenCheckout(false);
    }
    else{
      if(cartItems.length > 0){
        cancellationModal(()=>(navigate(-1),reset()),"You have added bet(s)!", "Are you sure you want to exit? Your bet(s) will be removed.");
      }
      else{
        navigate(-1);
        reset();
      }
    }
  }
  
  useEffect(() => {
    setDigits(game.digits);
  }, []);


  return (
    <Layout className="w-screen h-screen">
      <Header  style={{background:"linear-gradient(45deg, rgb(0, 64, 121), rgb(0, 30, 57))", padding:0}}>
        <div className="w-full h-full flex justify-between items-center pr-4 relative">
          <Button icon={<LeftOutlined/>} type="text" size="large" style={{color:"white"}} onClick={() => handleBack()}>{game.label}</Button>
          <Flex align="center" justify="center" gap={4}>
            <Button style={{background:"rgba(255,255,255,0.15)", color:"white"}}>₱3</Button>
            
            <Badge count={cartItems.length} size="small" color="green">
              <Button
                variant="outlined"
                shape="circle"
                icon={<ShoppingCartOutlined/>}
                style={{background:"rgba(255,255,255,0.15)", color:"white"}}
                onClick={()=>setOpenCheckout(!openCheckout)}
                />
            </Badge>
          </Flex>
        </div>
      </Header>
      <Content className="p-2">
        <DrawHeaders/>
        <BettingKeys/>
      </Content>
        <BettingCheckout
          openCheckout={openCheckout}
          onClose={()=>setOpenCheckout(false)}
          handleSearch={()=>{}}
        />
    </Layout>
  )
}