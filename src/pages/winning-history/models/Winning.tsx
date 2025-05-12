export interface Winning{
    id: number;
    gameTypeId:number;
    gameTypeName: string;
    transactionDate: Date;
    drawDate: Date;
    drawTime: string;
    totalStraightWin: number;
    totalRumbleWin: number;
    totalWinnings: number;
  }