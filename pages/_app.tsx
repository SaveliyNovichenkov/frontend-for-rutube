import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";
import ModalWindow from '@/components/ModalWindow/ModalWindow';
import { useState } from 'react';
import Loader from "@/components/Loader/Loader";
import {TypeComponentAuthFields} from "@/providers/private-page.interface";
import { AuthProvider } from '@/providers/AuthProvider';


type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	const [modalActive, setModalActive] = useState(true)

	return (
			<Provider store={store}>
				<PersistGate persistor={persistor}
							 loading={null}>
					<AuthProvider Component={Component}>
					<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		)

}

export default MyApp
