import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '../components/templates/ErrorBoundary';
import { GlobalStoreProvider } from '../hooks/useGlobalStore';
import { transition } from '../styles/config/framer';
import { theme } from '../styles/config/theme';
import { combineProviders } from '../utils/combineProviders';
import '../styles/font-face.css';

const GlobalProviders = combineProviders([
	[ThemeProvider, { theme }],
	[MotionConfig, { transition }],
	[GlobalStoreProvider],
]);

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ErrorBoundary>
		<GlobalProviders>
			<Component {...pageProps} />
		</GlobalProviders>
	</ErrorBoundary>
);

export default MyApp;
