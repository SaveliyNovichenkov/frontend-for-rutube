import type {GetStaticProps, NextPage} from 'next'
import Home from "../app/layout/pages/home/Home";
import {IHome} from "../app/layout/pages/home/Home.interface";
import {IVideo} from "../app/interfaces/video.interface";
import {VideoService} from "@/services/video/video.service";
function shuffle(array: IVideo[]) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array
}


const HomePage: NextPage<IHome> = (props) => {
	return(
	<>
		<Home {...props}/>
	</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const  {data: newVideos} = await VideoService.getAll()
		const  {data: topVideo} = await VideoService.getMostPopularVideo()

		return {
			props: {
				newVideos,
				topVideo: topVideo[0],
				randomVideo: shuffle(newVideos.filter(video => video.id !== topVideo[0].id))[0] ||
					({} as IVideo),
				randomVideo2:  shuffle(newVideos.filter(video => video.id !== topVideo[0].id))[1] ||
					({} as IVideo),
			} as IHome
		}
	} catch (e) {
		return {
			props: {
				newVideos: [],
				randomVideo: {} as IVideo,
				randomVideo2: {} as IVideo,
				topVideo: {} as IVideo
			} as IHome
		}
	}
}


export default HomePage
