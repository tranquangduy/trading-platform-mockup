import { useEffect, useState } from 'react';

export const useGetStockPriceRealTime = (name: string) => {
  const [currentStockPrice, setCurrentStockPrice] = useState<number | null>(
    null
  );
  const [prevStockPrices, setPrevStockPrices] = useState<number[] | null>(null);
  useEffect(() => {
    fetch('/api/stockprice', {
      method: 'POST',
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentStockPrice(data.currentStockPrice);
        setPrevStockPrices(data.prevStockPrices);
      });
  }, [name]);
  return { currentStockPrice, prevStockPrices };
};
