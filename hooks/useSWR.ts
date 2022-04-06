import useDefaultSWR, { Key, SWRConfiguration } from 'swr';
import axios from '../axios';

const fetcher = (url: string) => axios.get(url).then((response) => response.data);

export const useSWR = <Data>(key: Key, config?: SWRConfiguration) =>
	useDefaultSWR<Data>(key, fetcher, config);
