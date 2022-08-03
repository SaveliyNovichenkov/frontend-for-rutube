import { CustomAxios } from '@/services/auth/auth.service'
import { IVideo } from '../../interfaces/video.interface'


export const VIDEO = 'video'

export const VideoService = {
	async getAll() {
		return CustomAxios.get<IVideo[]>(`/${VIDEO}`)
	},
	async getVideo(id: number) {
		return CustomAxios.get<IVideo[]>(`/${VIDEO}/by-id/${id}`)
	},
	async getMostPopularVideo(id: number) {
		return CustomAxios.get<IVideo>(`/${VIDEO}/most-popular`)
	}
}
