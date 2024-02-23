import type { NextApiRequest, NextApiResponse } from 'next';
import { availableStocks } from '@/logic/mock-db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, amount } = JSON.parse(req.body);
  availableStocks.forEach((stock) => {
    if (stock.name === name && stock.amount < amount) {
      res.status(400).json({
        success: false,
        message: 'Not enough stock',
      });
      return;
    }

    if (stock.name === name) {
      stock.amount -= amount;
    }
  });
  res.status(200).json({
    success: true,
    availableStocks,
  });
}
