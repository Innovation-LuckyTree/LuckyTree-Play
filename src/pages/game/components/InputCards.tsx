import { Card, Input } from "antd";
import { FC } from "react";

interface InputCardProps{
    value: string | undefined | number;
    title: string;
    placeholder?: string | undefined;
    isSelected: boolean;
    onClick: ()=>void;
}

export const InputCard: FC<InputCardProps> = ({ value, onClick, isSelected, placeholder, title }) => (
  <Card
    size="small"
    title={title}
    style={{flex:1}}
    onClick={onClick}
    styles={{
      header:{fontSize:"13px", textAlign:"center", minHeight:"24px", background: isSelected? "#fa8c16":"#002140", color:"white"},
      body:{padding:0, fontSize:"20px", textAlign:"center", fontWeight:500}
    }}
  >
    <Input
      style={{
        pointerEvents: "none",
        display: "block",
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "500",
        height: "calc(100% - 24px)",
        border: "none",
        padding: "2px 5px"
      }}
      value={value}
      placeholder={placeholder}
      readOnly
    />
  </Card>
  );