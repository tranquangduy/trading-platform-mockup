import React from 'react';
import { NextPageWithLayout } from '../page';
import PrivateLayout from '@/components/organisms/PrivateLayout';
import { useFetchUser } from '@/logic/useFetchUser';
import { generateStockPrice } from '@/logic/generateStockPrice';
import Button from '@/components/atoms/Button';
import { useSellStock } from '@/logic/useSellStock';
import { formatCurrency } from '@/logic/formatCurrency';

const SellPage: NextPageWithLayout = () => {
  const { user, fetchUser } = useFetchUser();
  const { error, sellStock } = useSellStock();
  const handleOnSell = ({
    name,
    amount,
    price,
  }: {
    name: string;
    amount: number;
    price: number;
  }) => {
    sellStock(name, amount, price);
    fetchUser();
  };
  return (
    <div className="flex flex-col gap-y-4">
      <h4>User Stocks</h4>
      {user && <p>Available amount: {formatCurrency(user.availableAmount)}</p>}
      {user ? (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Amount</th>
              <th>Current Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user.stocks.map((s) => {
              const currentPrice = generateStockPrice(s.name);
              return (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>{s.amount}</td>
                  <td>{formatCurrency(currentPrice)}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleOnSell({
                          name: s.name,
                          amount: s.amount,
                          price: currentPrice,
                        })
                      }
                    >
                      Sell
                    </Button>
                    {error && <p className="text-red-500">{error}</p>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SellPage;

SellPage.getLayout = (page) => {
  return <PrivateLayout heading="Sell">{page}</PrivateLayout>;
};
