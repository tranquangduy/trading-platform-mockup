import type { NextApiRequest, NextApiResponse } from 'next';
import { generateStockPrice } from '@/logic/generateStockPrice';
import { prevStockPrices } from '@/logic/mock-db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = JSON.parse(req.body).name;
  const currentStockPrice = generateStockPrice(name);
  prevStockPrices.push(currentStockPrice);
  res.status(200).json({
    success: true,
    currentStockPrice: currentStockPrice,
    prevStockPrices: [...prevStockPrices],
  });
}
