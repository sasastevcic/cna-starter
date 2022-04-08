import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';

const MyDocument = () => (
	<Html>
		<Head />
		<body>
			<Main />
			<div id="modal" />
			<NextScript />
		</body>
	</Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					sheet.collectStyles(
						<>
							<GlobalStyle />
							<App {...props} />
						</>,
					),
			});

		const initialProps = await Document.getInitialProps(ctx);

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

export default MyDocument;
