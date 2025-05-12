import { Button, Drawer, Flex, Table, TableColumnsType } from "antd";
import { FC } from "react";
import { CartItem } from "../models/CartItem";
import { DeleteFilled } from "@ant-design/icons";
import { useBettingStore } from "../hooks/useBettingStore";
import { cancellationModal } from "../../../utils/helpers";

interface BettingCheckoutProps {
  openCheckout: boolean;
  onClose: () => void;
  handleSearch: () => void;
}

export const BettingCheckout: FC<BettingCheckoutProps> = ({openCheckout, onClose}) => {
  const {cartItems, removeCombination} = useBettingStore();

  const columns: TableColumnsType<CartItem> = [
    {
      title: "Combination",
      dataIndex: "combinaition",
      key: "combinaition",
      align: "center",
      render: (text) => <h2>{text}</h2>,
    },
    {
      title: "Straight",
      dataIndex: "straightAmount",
      key: "straightAmount",
      align: "center",
      render: (text) => <h2>{text??"-"}</h2>,
    },
    {
      title: "Rumble",
      dataIndex: "rumbleAmount",
      key: "rumbleAmount",
      align: "center",
      render: (text) => <h2>{text??"-"}</h2>,
    },
    {
      title: "",
      width: 40,
      align: "center",
      key: "action",
      render: (_, record, index) => 
        <DeleteFilled
          style={{color:"red"}}
          onClick={()=>cancellationModal(()=>removeCombination(index), `Delete combination: ${record.combinaition}`, "Are you sure you want to delete?")}
        />,
    }

  ];
  return (
    <Drawer
      open={openCheckout}
      onClose={onClose}
      placement="bottom"
      height="calc(100dvh - 65px)"
      closable={false}
      mask={false}
    >
      <Flex vertical gap={4} flex={1} style={{height: "100%"}} justify="space-between">
        <Flex vertical gap={4} justify="flex-start">
          <div className="flex justify-between items-center p-2.5 bg-gray-300 rounded-md">
            <h2>Draw Time</h2>
            <h2><b>5:00 PM</b></h2>
          </div>
          <div className="flex justify-between items-center p-2.5 bg-gray-300 rounded-md">
            <h2>Draw Date</h2>
            <h2><b>April 29, 2025</b></h2>
          </div>
          <Table<CartItem> 
            size="small"
            columns={columns}
            dataSource={cartItems}
            pagination={false}
            summary={(pageData) => {
              let totalStraight = 0;
              let totalRumble = 0;
          
              pageData.forEach(({ straightAmount = 0, rumbleAmount = 0 }) => {
                totalStraight += straightAmount;
                totalRumble += rumbleAmount;
              });
          
              return (
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}><strong>Total  &emsp; &emsp;{totalRumble + totalStraight} =</strong></Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="center"><strong>{totalStraight}</strong></Table.Summary.Cell>
                  <Table.Summary.Cell index={2} align="center"><strong>{totalRumble}</strong></Table.Summary.Cell>
                  <Table.Summary.Cell index={3} />
                </Table.Summary.Row>
              );
            }}
            />
        </Flex>
        <Button type="primary" block onClick={()=>{}} style={{justifySelf:"flex-end"}}>Submit</Button>
      </Flex>
    </Drawer>
  )
}