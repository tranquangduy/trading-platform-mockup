import { useEffect, useState } from 'react';

export const useGetStockPriceRealTime = (name: string) => {
  const [currentStockPrice, setCurrentStockPrice] = useState<number | null>(
    null
  );
  const [prevStockPrices, setPrevStockPrices] = useState<number[] | null>(null);

  const fetchData = async (name: string) => {
    const res = await fetch('/api/stockprice', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setCurrentStockPrice(data.currentStockPrice);
    setPrevStockPrices(data.prevStockPrices);
  };

  useEffect(() => {
    // get stock price every 3 seconds
    const interval = setInterval(() => {
      fetchData(name);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetchData(name);
  }, []);

  return { currentStockPrice, prevStockPrices };
};
