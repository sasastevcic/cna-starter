/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '../components/templates/ErrorBoundary';
import { GlobalStoreProvider } from '../hooks/useGlobalStore';
import { getTransition } from '../styles/config/framer';
import { theme } from '../styles/config/theme';
import { combineProviders } from '../utils/combineProviders';
import '../styles/font-face.css';

const GlobalProviders = combineProviders([
	// @ts-ignore
	[ThemeProvider, { theme }],
	[MotionConfig, { transition: getTransition() }],
]);

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ErrorBoundary>
		{/* @ts-ignore */}
		<GlobalProviders>
			<GlobalStoreProvider initialCount={24}>
				<Component {...pageProps} />
			</GlobalStoreProvider>
		</GlobalProviders>
	</ErrorBoundary>
);

export default MyApp;
