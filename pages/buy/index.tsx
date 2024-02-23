import StockComboBox from '@/components/molecules/StockComboBox';
import PrivateLayout from '@/components/organisms/PrivateLayout';
import React, { useState } from 'react';
import { NextPageWithLayout } from '../page';
import { useFetchMarket } from '@/logic/useFetchMarket';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { formatCurrency } from '@/logic/formatCurrency';
import { useBuyStock } from '@/logic/useBuyStock';

const BuyPage: NextPageWithLayout = () => {
  const { market, fetchData } = useFetchMarket();
  const { buyStock, error } = useBuyStock();
  const [selectedStockName, setSelectedStockName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleOnBuy = async () => {
    await buyStock(selectedStockName, amount);
    fetchData();
  };

  const isStockAvailable =
    Number(market?.find((m) => m.name === selectedStockName)?.amount) >= amount;
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <h4>Market</h4>
        {market ? (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Amount</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>
              {market.map((m) => {
                return (
                  <tr key={m.name}>
                    <td>{m.name}</td>
                    <td>{m.amount}</td>
                    <td>{formatCurrency(m.currentPrice)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {market && (
        <StockComboBox
          stock={market.map((m) => {
            return { name: m.name, id: m.name };
          })}
          label={'stock to buy'}
          onChange={(e: { name: string }) => setSelectedStockName(e?.name)}
        />
      )}
      <div>
        <Input
          label="Amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <Button onClick={handleOnBuy}>Buy</Button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default BuyPage;

BuyPage.getLayout = (page) => {
  return <PrivateLayout heading="Buy">{page}</PrivateLayout>;
};
