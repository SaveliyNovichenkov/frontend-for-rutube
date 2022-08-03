import { IVideo } from './video.interface'

interface ISubscription {
	fromUser: IUser
	toChannel: IUser
}

export interface IUser {
	id: number
	email: string
	password?: string
	name: string
	isVerified: boolean
	subscribersCount: number
	description: string
	avatarPath: string
	videos?: IVideo[]
	subscriptions?: ISubscription[]
	subscribers?: ISubscription[]
	createdAt: string
	updatedAt: string
}

export interface UserDto
	extends Pick<
		IUser,
		'email' | 'password' | 'name' | 'description' | 'avatarPath'
	> {}
