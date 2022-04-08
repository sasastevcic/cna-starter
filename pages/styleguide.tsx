import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import StyleguideTemplate from '../components/templates/Styleguide';

const Styleguide: NextPage = () => (
	<>
		<Head>
			<title>Create Next App | Styleguide</title>
		</Head>
		<StyleguideTemplate />
	</>
);

export const getStaticProps: GetStaticProps = () => ({
	props: {},
	notFound: process.env.NODE_ENV === 'production',
});

export default Styleguide;
