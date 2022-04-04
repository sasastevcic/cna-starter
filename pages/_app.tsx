import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { combineProviders } from '../utils/combineProviders';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/config/theme';
import { MotionConfig } from 'framer-motion';
import { transition } from '../styles/config/framer';

const GlobalProviders = combineProviders([
	[ThemeProvider, { theme }],
	[MotionConfig, { transition }],
]);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GlobalProviders>
			<Component {...pageProps} />
		</GlobalProviders>
	);
}

export default MyApp;
