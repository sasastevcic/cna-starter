import type { NextPage } from 'next';
import Head from 'next/head';
import StyleguideTemplate from '../components/templates/Styleguide';

export const getStaticProps = () => {
	return {
		props: {},
		notFound: process.env.NODE_ENV === 'production',
	};
};

const Styleguide: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App | Styleguide</title>
			</Head>
			<StyleguideTemplate />
		</>
	);
};

export default Styleguide;
