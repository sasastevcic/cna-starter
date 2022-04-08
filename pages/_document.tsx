import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const MyDocument = () => {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<div id="modal" />
				<NextScript />
			</body>
		</Html>
	);
};

export default MyDocument;

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
			});

		const initialProps = await MyDocument.getInitialProps(ctx);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			),
		};
	} finally {
		sheet.seal();
	}
};
