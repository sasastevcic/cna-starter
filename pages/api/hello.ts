// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type HelloData = {
	title: string;
	time: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<HelloData>) {
	const currentTime = new Date().toLocaleTimeString();
	const title = 'Create Next App - Starter';

	res.status(200).json({ title, time: currentTime });
}
