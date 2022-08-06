import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuthData} from "@/services/auth/auth.helper";
import {AuthService} from "@/services/auth/auth.service";
import {AuthFormInterface} from "../../layout/header/auth-form/AuthForm.interface";

export const registerThunk = createAsyncThunk<IAuthData, AuthFormInterface>(
    'auth/register', async ({email, password}, thunkAPI): Promise<any> => {
        try {
            const response = await AuthService.register(email, password )
            return response
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const loginThunk = createAsyncThunk<IAuthData, AuthFormInterface>(
    'auth/login', async ({email, password}, thunkAPI): Promise<any> => {
        try {
            const response = await AuthService.login(email, password )
            return response
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    }
)

// export const logoutThunk