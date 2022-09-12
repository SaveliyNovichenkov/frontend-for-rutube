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
	createdAt?: string
	updatedAt?: string
}

export interface VideoDto
	extends Pick<
		IVideo,
		'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
