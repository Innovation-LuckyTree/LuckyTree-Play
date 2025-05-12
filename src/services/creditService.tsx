import { CreditTransaction } from "../pages/credit-history/models/CreditTransaction";
import { CreditTrack } from "../pages/credit-tracking/models/CreditTrack";
import { ApiResponse } from "../shared/types/ApiResponse";
import { PaginationProps } from "../shared/types/PaginationProps";
import { mockCreditTrack, mockCreditTransactions } from "../utils/mocks";

export const getCreditHistory = (pagination:PaginationProps): Promise<ApiResponse<CreditTransaction[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockCreditTransactions.slice(pagination.page*pagination.size, (pagination.page+1)*pagination.size).sort((a,b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime())
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const getCreditTracking = (pagination:PaginationProps): Promise<ApiResponse<CreditTrack[]>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
            "status": 200,
            "data": mockCreditTrack.slice(pagination.page*pagination.size, (pagination.page+1)*pagination.size).sort((a,b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime())
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};