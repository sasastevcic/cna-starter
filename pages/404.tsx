import type { NextPage } from 'next';
import Head from 'next/head';
import NotFoundTemplate from '../components/templates/NotFound';

const NotFound: NextPage = () => (
	<>
		<Head>
			<title>Create Next App | Not Found</title>
		</Head>
		<NotFoundTemplate />
	</>
);

export default NotFound;
