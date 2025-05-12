export interface GameSchedule{
    id:number;
    isOpen: boolean;
    drawTime: string;
    allowAdvance: boolean;
    openSchedule: Date;
    cutOff:Date;
}