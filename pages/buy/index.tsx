import StockComboBox from '@/components/molecules/StockComboBox';
import PrivateLayout from '@/components/organisms/PrivateLayout';
import React from 'react';
import { NextPageWithLayout } from '../page';

const BuyPage: NextPageWithLayout = () => {
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

BuyPage.getLayout = (page) => {
  return <PrivateLayout heading="Buy">{page}</PrivateLayout>;
};
