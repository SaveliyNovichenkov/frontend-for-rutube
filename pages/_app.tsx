import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";
import { useState } from 'react';
import {TypeComponentAuthFields} from "@/providers/private-page.interface";
import { AuthProvider } from '@/providers/AuthProvider';
import dayjs from "dayjs"
import { QueryClientProvider, QueryClient} from 'react-query';
require('dayjs/locale/ru')

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	const [modalActive, setModalActive] = useState(true)
	dayjs.locale('ru')

	const queryClient = new QueryClient()
	return (
			<Provider store={store}>
				<PersistGate persistor={persistor}
							 loading={null}>
					<AuthProvider Component={Component}>
						<QueryClientProvider client={queryClient}>
							<Component {...pageProps} />
						</QueryClientProvider>
					</AuthProvider>
				</PersistGate>
			</Provider>
		)

}

export default MyApp
