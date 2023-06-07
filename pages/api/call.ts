/** @format */

import { ICall } from '../../common/types/ICall';
import dbConnect from '@/lib/dbConnect';
import Call from '@/models/Call';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
	runtime: 'edge',
};

interface Data {
	calls?: ICall[];
	call?: ICall;
	message?: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const calls = await Call.find<ICall>({});
				res.status(200).json({ calls });
			} catch (error) {
				res.status(400).json({ message: 'error' });
			}
			break;
		case 'POST':
			try {
				const call = await Call.create<ICall>(
					req.body.call
				); /* create a new model in the database */
				res.status(201).json({ call });
			} catch (error) {
				res.status(400).json({ message: 'error' });
			}
			break;
		default:
			res.status(400).json({ message: 'error' });
			break;
	}
}
