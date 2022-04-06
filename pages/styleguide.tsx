import type { NextPage } from 'next';
import StyleguideTemplate from '../components/templates/Styleguide';

export const getStaticProps = () => {
	return {
		props: {},
		notFound: process.env.NODE_ENV === 'production',
	};
};

const Styleguide: NextPage = () => {
	return <StyleguideTemplate />;
};

export default Styleguide;
