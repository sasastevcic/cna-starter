import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
	return (
		<Html>
			<Head>
				<link
					rel="preload"
					href="/fonts/Lato-Bold.woff2"
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Lato-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
			</Head>
			<body>
				<Main />
				<div id="modal" />
				<NextScript />
			</body>
		</Html>
	);
};

export default MyDocument;
