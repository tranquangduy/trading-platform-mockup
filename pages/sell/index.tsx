import React from 'react';
import { NextPageWithLayout } from '../page';
import PrivateLayout from '@/components/organisms/PrivateLayout';

const SellPage: NextPageWithLayout = () => {
  return <div>abcd</div>;
};

export default SellPage;

SellPage.getLayout = (page) => {
  return <PrivateLayout heading="Sell">{page}</PrivateLayout>;
};
