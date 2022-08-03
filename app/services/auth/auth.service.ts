import axios from 'axios'

import { IAuthData } from '@/services/auth/auth.helper'

import { getContentType } from '@/utils/api.utils'

export const API_URI = `${process.env.REACT_APP_URI}/api`
export const CustomAxios = axios.create({
	baseURL: API_URI,
	headers: getContentType()
})
export const AUTH = 'auth'
export const LOGIN = 'login'
export const REGISTER = 'register'

export const AuthService = {
	async auth(email: string, password: string, type: 'login' | 'register') {
		const response = await CustomAxios.post<IAuthData>(`/${AUTH}/${type}`, {
			email,
			password
		})

		return response.data
	}
}
