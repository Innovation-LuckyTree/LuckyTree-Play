import { Button, DatePicker, Drawer, Flex } from "antd";
import { FC } from "react";
import { Dayjs } from "dayjs";
import { DrawerStyles } from "antd/es/drawer/DrawerPanel";

const {RangePicker} = DatePicker

interface FilterDrawerProps {
  openFilter: boolean;
  onClose: () => void;
  setDateRange: (range:[Dayjs, Dayjs]) => void;
  dateRange: [Dayjs, Dayjs] | undefined;
  handleSearch: () => void;
}
const drawerStyles: DrawerStyles = {
  body: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
};

export const FilterDrawer: FC<FilterDrawerProps> = ({openFilter, onClose, setDateRange, handleSearch, dateRange}) => {
  return (
    <Drawer
      title="Filter(s):"
      open={openFilter}
      onClose={onClose}
      placement="bottom"
      height="32dvh"
      closable={false}
      styles={drawerStyles}
      extra={
        <Button type="text">RESET</Button>
      }
    >
      <RangePicker
        placeholder={['Start Date', 'End Date']}
        placement="topLeft"
        value={dateRange}
        style={{width:"100%", maxWidth:"300px"}}
        onChange={(dates) => {
          if (dates) setDateRange(dates as [Dayjs, Dayjs]);
        }}
        allowClear={false}
        format="YYYY-MM-DD"
      />
      <Flex vertical gap={2} 
          style={{width:"100%", maxWidth:"300px"}}>
        <Button type="primary" block onClick={()=>(handleSearch(), onClose())}>PERFORM FILTER</Button>
        <Button block>CLOSE</Button>
      </Flex>
    </Drawer>
  )
}