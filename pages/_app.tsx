import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '../components/templates/ErrorBoundary';
import { transition } from '../styles/config/framer';
import { theme } from '../styles/config/theme';
import GlobalStyle from '../styles/GlobalStyles';
import { combineProviders } from '../utils/combineProviders';
import '../styles/font-face.css';

const GlobalProviders = combineProviders([
	[ThemeProvider, { theme }],
	[MotionConfig, { transition }],
]);

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<GlobalProviders>
			<GlobalStyle />
			<ErrorBoundary>
				<Component {...pageProps} />
			</ErrorBoundary>
		</GlobalProviders>
	);
};

export default MyApp;
