import { useState } from 'react';

export const useSellStock = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const sellStock = async (
    name: string,
    amount: number,
    currentPrice: number
  ) => {
    try {
      const res = await fetch('/api/sell-stock', {
        method: 'POST',
        body: JSON.stringify({ name, amount, currentPrice }),
      });
      if (!res.ok) {
        throw new Error('Not enough stock');
      }
      await res.json();
    } catch (error) {
      console.log(error);
      setError('Not enough stock');
    }
  };

  return { sellStock, error };
};
