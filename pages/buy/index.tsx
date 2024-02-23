import StockComboBox from '@/components/molecules/StockComboBox';
import React from 'react';

const BuyPage = () => {
  const stock = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Orange' },
    { id: '4', name: 'Pineapple' },
    { id: '5', name: 'Mango' },
  ];
  return (
    <div>
      <StockComboBox stock={stock} label={'stock to buy'} />
    </div>
  );
};

export default BuyPage;
