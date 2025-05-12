import { FC } from "react";

interface TimeBoxProps{
    value: number;
    label: string;
}

export const TimeBox: FC<TimeBoxProps> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center p-2 bg-white w-[50px] h-[50px] ml-1 rounded-md">
      <h2 className="font-bold text-font-blue text-xl leading-none">{value}</h2>
      <h3 className="font-bold text-font-blue text-xs">{label}</h3>
    </div>
  );