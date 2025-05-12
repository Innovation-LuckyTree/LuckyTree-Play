export interface UserAuth{
    name: string;
    mobileNumber: string;
    id: number;
}

export interface AuthResponse{
    token: string;
    user: UserAuth;
}