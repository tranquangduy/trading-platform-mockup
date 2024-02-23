import { Market } from '@/types';
import { useEffect, useState } from 'react';

export const useFetchMarket = () => {
  const [market, setMarket] = useState<Market[]>();

  const fetchData = async () => {
    const res = await fetch('/api/market');
    const data = await res.json();
    setMarket(data.market);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { market, fetchData };
};
