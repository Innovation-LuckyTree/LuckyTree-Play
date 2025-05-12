import { DrawScheduleDetail } from "../shared/types/DrawScheduleDetail";


export const DRAWSCHEDULES: DrawScheduleDetail[] = [
    {  
      id:1,
      drawScheduleId:1,
      drawSchedule: '02:00 PM',
      currentDraw:false,
      advanced:true,
    },
    {  
      id:2,
      drawScheduleId:2,
      drawSchedule: '05:00 PM',
      currentDraw:true,
      advanced:false,
    },
    {  
      id:3,
      drawScheduleId:3,
      drawSchedule: '09:00 PM',
      currentDraw:false,
      advanced:true,
    },
  ]