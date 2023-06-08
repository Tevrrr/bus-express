/** @format */

import { ICall } from '../../common/types/ICall';
import dbConnect from '@/lib/dbConnect';
import Call from '@/models/Call';
import { NextApiRequest, NextApiResponse } from 'next';




interface Data {
	calls?: ICall[];
	call?: ICall;
	errorMessage?: string;
}

export default async function hendler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const calls = await Call.find<ICall>({});
				res.status(200).json({ calls });
			} catch (error) {
				res.status(400).json({ errorMessage: 'error' });
			}
			break;
		case 'POST':
			try {
				const call = await Call.create<ICall>(
					req.body.call
				); /* create a new model in the database */
				res.status(201).json({ call });
			} catch (error) {
				res.status(400).json({ errorMessage: 'error' });
			}
			break;
		default:
			res.status(400).json({ errorMessage: 'error' });
			break;
	}
};