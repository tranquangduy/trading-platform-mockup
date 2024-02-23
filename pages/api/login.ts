import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (email === 'admin@admin.de' && password === 'admin123') {
    res.status(200).json({ success: true });
    return;
  }
  res.status(401).json({ error: 'Invalid credentials.' });
}
