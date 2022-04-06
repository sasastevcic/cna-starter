import type { NextPage } from 'next';
import Head from 'next/head';
import NotFoundTemplate from '../components/templates/NotFound';

const NotFound: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App | Server Error</title>
			</Head>
			<NotFoundTemplate title="Server error, please try again!" />
		</>
	);
};

export default NotFound;
