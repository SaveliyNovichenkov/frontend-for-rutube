import { createSlice } from "@reduxjs/toolkit";

import {AuthInterface} from "@/store/auth/auth.interface";
import {loginThunk, logoutThunk, registerThunk} from "./auth.action";

const initialState: AuthInterface = {
    user: null,
    accessToken: '',
    isLoading: false
}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(registerThunk.pending, state => {
            state.isLoading = true
        })
          .addCase(registerThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.accessToken = payload.accessToken
            state.user = payload.user
        })
          .addCase(registerThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.accessToken = ''
            state.user = null
        }).addCase(loginThunk.pending, state => {
            state.isLoading = true
        })
          .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.accessToken = payload.accessToken
            state.user = payload.user
        })
          .addCase(loginThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.accessToken = ''
            state.user = null
        }).addCase(logoutThunk.fulfilled, state => {
            state.isLoading = false
            state.accessToken = ''
            state.user = null
        })
})