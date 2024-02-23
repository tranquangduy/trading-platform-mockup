import type { NextApiRequest, NextApiResponse } from 'next';
import { generateStockPrice } from '@/logic/generateStockPrice';
import { availableStocks } from '@/logic/mock-db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const market = availableStocks.map((stock) => {
    return {
      name: stock.name,
      amount: stock.amount,
      currentPrice: generateStockPrice(stock.name),
    };
  });
  res.status(200).json({
    success: true,
    market,
  });
}
