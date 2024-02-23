import DepotCard from '@/components/molecules/DepotCard';
import React from 'react';
import { NextPageWithLayout } from '../page';
import Layout from '@/components/organisms/PrivateLayout';
import { useFetchUser } from '@/logic/useFetchUser';
import { formatCurrency } from '@/logic/formatCurrency';
import StockInfo from '@/components/molecules/StockInfo';

const OverviewPage: NextPageWithLayout = () => {
  const { user } = useFetchUser();

  return (
    <div>
      <DepotCard
        name={'Your depot'}
        stat={formatCurrency(user?.availableAmount)}
      />
      {user?.stocks.map((stock) => (
        <StockInfo key={stock.name} stock={stock} />
      ))}
    </div>
  );
};

export default OverviewPage;

OverviewPage.getLayout = (page) => {
  return <Layout heading="Overview">{page}</Layout>;
};
