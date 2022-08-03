import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {IAuthData} from "@/services/auth/auth.helper";
import {AuthServiceLogin, AuthServiceRegister} from "@/services/auth/auth.service";
import {AuthFormInterface} from "../../layout/header/auth-form/AuthForm.interface";

export const registerThunk = createAsyncThunk<IAuthData, AuthFormInterface>(
    'auth/register', async ({email, password}, thunkAPI): Promise<any> => {
        try {
            const response = await AuthServiceRegister(email, password )
            return response
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const loginThunk = createAsyncThunk<IAuthData, AuthFormInterface>(
    'auth/register', async ({email, password}, thunkAPI): Promise<any> => {
        try {
            const response = await AuthServiceLogin(email, password )
            return response
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    }
)

// export const logout