/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';
import axios from '../axios';

export default function useRequest<Data, Request = any>(
	request: AxiosRequestConfig<Request> | string,
	{ fallbackData, ...config }: SWRConfiguration = {},
) {
	const fallbackResponse = {
		status: 200,
		statusText: 'InitialData',
		headers: {},
		data: fallbackData,
	};
	return useSWR<Data>(
		request && JSON.stringify(request),
		() => axios(request as any).then((response) => response.data),
		{
			...config,
			...(fallbackData && { fallbackData, fallback: fallbackResponse }),
		},
	);
}
