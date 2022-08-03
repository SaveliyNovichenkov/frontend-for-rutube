import { IUser } from 'interfaces/user.interface'
import { CustomAxios } from '@/services/auth/auth.service'

export const USER = 'user'
export const UserService = {
	async getAll() {
		return CustomAxios.get<IUser[]>(`/${USER}`)
	},
	async getUser(id: number) {
		return CustomAxios.get<IUser>(`/${USER}/by-id/${id}`)
	}
}
