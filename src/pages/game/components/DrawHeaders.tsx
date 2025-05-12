import { CalendarFilled, ClockCircleFilled } from "@ant-design/icons";
import { Card, Col, Flex, Row } from "antd";
import { FC } from "react";
import { TimeBox } from "./Timebox";
import { ScheduleResults } from "./ScheduleResults";

export const DrawHeaders: FC = () => {
	return (
		<Card styles={{body: {padding:8}}}>
			<Flex justify="space-between" style={{background: "linear-gradient(45deg, rgb(0, 107, 215), #0a92ff, rgb(0, 107, 215))", padding:8, borderRadius:6}}>
				<Col>
				<h2 className="text-white">Draw: <ClockCircleFilled/> 5:00 PM</h2>
				<h2 className="text-white"><CalendarFilled/> Mon 28-Apr-25</h2>
				</Col>
				<Row>
					<TimeBox value={0} label="Hour"/>
					<TimeBox value={0} label="Minute"/>
					<TimeBox value={0} label="Second"/>
				</Row>
			</Flex>
			<Flex gap={8} style={{marginTop:"8px"}}>
				<ScheduleResults drawTime="2:00 PM" combination="4-2-1"/>
				<ScheduleResults drawTime="5:00 PM" combination=""/>
				<ScheduleResults drawTime="9:00 PM" combination=""/>
			</Flex>
		</Card>
	)
}