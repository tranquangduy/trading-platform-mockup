import type { NextApiRequest, NextApiResponse } from 'next';
import { user } from '../../logic/mock-db/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, ...user });
}
