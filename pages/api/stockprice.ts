import type { NextApiRequest, NextApiResponse } from 'next';
import { generateStockPrice } from '@/logic/generateStockPrice';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = JSON.parse(req.body).name;
  // generate 20 random stock prices
  const stockPrices = [];
  for (let i = 0; i < 20; i++) {
    stockPrices.push(generateStockPrice(name + i));
  }
  res.status(200).json({
    success: true,
    currentStockPrice: generateStockPrice(name),
    prevStockPrices: stockPrices,
  });
}
