import {IAuthData} from "@/services/auth/auth.helper";
import {useTypedSelector} from "@/hooks/useTypedSelector";


export const useAuth = () => useTypedSelector(state => state.auth)