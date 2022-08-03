import { IUser } from './user.interface'
import { IVideo } from './video.interface'

export interface IComment {
	message: string
	user: IUser
	video: IVideo
}

export interface CommentDto extends Pick<IComment, 'message'> {
	videoId: number
}
