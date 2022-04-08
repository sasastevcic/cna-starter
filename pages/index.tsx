import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import axios from '../axios';
import HomeTemplate from '../components/templates/Home';
import { HelloData } from './api/hello';

const API = '/hello';

interface HomeProps {
	fallback: {
		[API]: HelloData;
	};
}

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const { data } = await axios.get<HelloData>(API);

	return {
		props: {
			fallback: {
				[API]: data,
			},
		},
	};
};

export default Home;
