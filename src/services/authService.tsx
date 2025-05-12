import { LoginRequest } from "../pages/login/models/request";
import { ApiResponse } from "../shared/types/ApiResponse";
import { ChangePasswordRequest } from "../shared/types/ChangePasswordRequest";
import { AuthResponse } from "../shared/types/UserAuth";

export const login = (payload: LoginRequest): Promise<ApiResponse<AuthResponse>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
          "status": 200,
          "data": {
            "token": "Insert-here-sample-token",
            "user": {
              "id": 1,
              "mobileNumber": payload.username,
              "name": "Juan"
            }
          }
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};

export const changePassword = (payload: ChangePasswordRequest): Promise<ApiResponse<boolean>>  => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
          "status": 200,
          "data":true
        })
      }, 500
    )
  });
  // return apiClient.post('/api/login', payload);
};