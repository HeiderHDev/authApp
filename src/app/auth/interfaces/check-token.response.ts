import { User } from "./user.interfaces";


export interface ChekTokenResponse {
    user: User;
    token: string;
}