import { useGetStockPriceRealTime } from '@/logic/useGetStockPriceRealTime';
import React from 'react';
import DepotCard from './DepotCard';
import { formatCurrency } from '@/logic/formatCurrency';
import TrendChart from './TrendChart';

type StockInfoProps = {
  stock: {
    name: string;
    amount: number;
    boughtPrice: number;
  };
};

const StockInfo: React.FC<StockInfoProps> = ({ stock }) => {
  const { currentStockPrice, prevStockPrices } = useGetStockPriceRealTime(
    stock.name
  );
  const percentageChange = currentStockPrice
    ? ((currentStockPrice - stock.boughtPrice) / stock.boughtPrice) * 100
    : 0;

  return (
    <div className="flex w-full">
      <div className="w-[50%]">
        <DepotCard
          key={stock.name}
          name={stock.name}
          stat={formatCurrency(stock.amount * (currentStockPrice || 0))}
          previousStat={formatCurrency(stock.boughtPrice * stock.amount)}
          changeType={
            currentStockPrice && currentStockPrice > stock.boughtPrice
              ? 'increase'
              : 'decrease'
          }
          change={percentageChange ? `${percentageChange.toFixed(2)}%` : '-'}
        />
      </div>
      {prevStockPrices && <TrendChart data={prevStockPrices || [1]} />}
    </div>
  );
};

export default StockInfo;
