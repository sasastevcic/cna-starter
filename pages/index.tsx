import type { NextPage } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import axios from '../axios';
import HomeTemplate from '../components/templates/Home';

interface HomeProps {
	fallback: Record<string, unknown>;
}

const API = '/hello';

export const getServerSideProps = async () => {
	const { data } = await axios.get(API);

	return {
		props: {
			fallback: {
				[API]: data,
			},
		},
	};
};

const Home: NextPage<HomeProps> = ({ fallback }) => {
	return (
		<>
			<Head>
				<title>Create Next App | Home</title>
			</Head>
			<SWRConfig value={{ fallback }}>
				<HomeTemplate />
			</SWRConfig>
		</>
	);
};

export default Home;
