import {IAuthData} from "@/services/auth/auth.helper";


export interface AuthInterface extends IAuthData {
    isLoading: boolean
}