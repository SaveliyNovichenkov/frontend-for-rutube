import { IComment } from './comment.interface'
import { IUser } from './user.interface'

export interface IVideo {
	id: number
	name: string
	isPublic?: boolean
	views: number
	likes: number
	dislikes: number
	duration: number
	seconds: number
	description: string
	videoPath: string
	thumbnailPath: string
	user: IUser
	comment?: IComment[]
	videoLikes : ILike[]
	createdAt: string | Date
	updatedAt?: string | Date
}

export interface ILike {
	id: number
	createdAt: string
	updatedAt: string
	likes: boolean
	user: User2
}

export interface User2 {
	id: number
	name: string
	isVerified: boolean
	subscribersCount: number
	avatarPath: string
}


export interface VideoDto
	extends Pick<
		IVideo,
		'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
