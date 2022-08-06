import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";
import ModalWindow from '@/components/ModalWindow/ModalWindow';
import { useState } from 'react';
import Loader from "@/components/Loader/Loader";




function MyApp({ Component, pageProps }: AppProps) {
	const [modalActive, setModalActive] = useState(true)

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}
						 loading={null}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>

		)

}

export default MyApp
