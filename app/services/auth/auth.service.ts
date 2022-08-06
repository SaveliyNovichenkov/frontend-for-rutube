import axios from 'axios'

import { IAuthData } from '@/services/auth/auth.helper'

import { getContentType } from '@/utils/api.utils'
import {API} from "../../helpers/API";

export const API_URI = `${process.env.REACT_APP_URI}/api`
export const CustomAxios = axios.create({
	baseURL: 'http://localhost:4200/api',
	headers: getContentType()
})

export const AuthService = {
	async login(email: string, password: string) {
		const response = await CustomAxios.post<IAuthData>('auth/login', {
			email, password
		})
		return response.data
	},
	async register(email: string, password: string) {
		const response = await CustomAxios.post<IAuthData>('auth/register', {
			email, password
		})
		return response.data
	}
}
/*
export const AuthServiceRegister = async (email: string, password: string) => {
	const response = await CustomAxios.post<IAuthData>(`${API_URI}/${AUTH}/register`, {
		email,
		password
	})
	return response
}

export const AuthServiceLogin = async (email: string, password: string) => {
	const response = await CustomAxios.post<IAuthData>(`${API_URI}/${LOGIN}/login`, {
		email,
		password
	})
	return response
} */

