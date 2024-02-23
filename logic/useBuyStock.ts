import { useState } from 'react';

export const useBuyStock = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const buyStock = async (name: string, amount: number) => {
    try {
      const res = await fetch('/api/buy-stock', {
        method: 'POST',
        body: JSON.stringify({ name, amount }),
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

  return { buyStock, error };
};
