import { Game } from "../pages/home/models/game";
import { Bet } from "../pages/my-bets/models/Bet";
import { BetCombination } from "../pages/my-bets/models/BetCombination";
import { Result } from "../pages/results/models/Result";
import { WinCombination } from "../pages/winning-history/models/BetCombination";
import { Winning } from "../pages/winning-history/models/Winning";
import { ApiResponse } from "../shared/types/ApiResponse";
import { PaginationProps } from "../shared/types/PaginationProps";
import { GAME_TYPES, mockBetDetail, mockBets, mockResults, mockWinDetail, mockWinnings } from "../utils/mocks";

export const getPlayableGames = (): Promise<ApiResponse<Game[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": GAME_TYPES.filter((e)=>e.isPlayable)
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const getResultList = (pagination:PaginationProps): Promise<ApiResponse<Result[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockResults.slice(pagination.page*pagination.size, (pagination.page+1)*pagination.size)
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const getMyBets = (pagination:PaginationProps): Promise<ApiResponse<Bet[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockBets.slice(pagination.page*pagination.size, (pagination.page+1)*pagination.size)
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const getWinningHistory = (pagination:PaginationProps): Promise<ApiResponse<Winning[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockWinnings.slice(pagination.page*pagination.size, (pagination.page+1)*pagination.size)
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const getBetDetails = (id:number): Promise<ApiResponse<BetCombination[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockBetDetail
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const getWinDetails = (id:number): Promise<ApiResponse<WinCombination[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockWinDetail
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};