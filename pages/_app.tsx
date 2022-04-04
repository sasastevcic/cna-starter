import type { AppProps } from 'next/app';
import { combineProviders } from '../utils/combineProviders';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/config/theme';
import { MotionConfig } from 'framer-motion';
import { transition } from '../styles/config/framer';
import GlobalStyle from '../styles/GlobalStyles';

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
