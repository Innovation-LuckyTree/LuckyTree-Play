export interface Bet{
    id: number;
    gameTypeId:number;
    gameTypeName: string;
    transactionDate: Date;
    drawDate: Date;
    drawTime: string;
    totalStraight: number;
    totalRumble: number;
    totalBet: number;
  }