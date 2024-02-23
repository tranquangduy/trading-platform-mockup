import type { NextApiRequest, NextApiResponse } from 'next';
import { user } from '@/logic/mock-db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, amount, currentPrice } = JSON.parse(req.body);
  if (!name || !amount || !currentPrice) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input',
    });
  }
  if (amount <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid amount',
    });
  }
  if (currentPrice <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid price',
    });
  }
  const stock = user.stocks.find((s) => s.name === name);
  if (!stock) {
    return res.status(400).json({
      success: false,
      message: 'Stock not found',
    });
  }
  if (stock.amount < amount) {
    return res.status(400).json({
      success: false,
      message: 'Not enough stock',
    });
  }
  stock.amount -= amount;
  user.availableAmount += amount * currentPrice;
  res.status(200).json({
    success: true,
    user,
  });
}
