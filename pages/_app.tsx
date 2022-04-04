import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { transition } from '../styles/config/framer';
import { theme } from '../styles/config/theme';
import GlobalStyle from '../styles/GlobalStyles';
import { combineProviders } from '../utils/combineProviders';

const GlobalProviders = combineProviders([
	[ThemeProvider, { theme }],
	[MotionConfig, { transition }],
]);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GlobalProviders>
			<GlobalStyle />
			<Component {...pageProps} />
		</GlobalProviders>
	);
}

export default MyApp;
