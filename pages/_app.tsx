/** @format */

import { AnchorProvider } from '@/common/AnchorContext';
import { SwiperProvider } from '@/common/SwiperContext';
import Navbar from '@/components/UI/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (

			<AnchorProvider>
				<Navbar />
				<SwiperProvider>
					<Component {...pageProps} />
				</SwiperProvider>
			</AnchorProvider>

	);
}
