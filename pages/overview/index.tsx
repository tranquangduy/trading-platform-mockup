import DepotCard from '@/components/molecules/DepotCard';
import TrendChart from '@/components/molecules/TrendChart';
import React from 'react';
import { NextPageWithLayout } from '../page';
import Layout from '@/components/organisms/PrivateLayout';
import { useFetchUser } from '@/logic/useFetchUser';
import { formatCurrency } from '@/logic/formatCurrency';

const OverviewPage: NextPageWithLayout = () => {
  const { user } = useFetchUser();

  return (
    <div>
      <DepotCard
        name={'Your depot'}
        stat={formatCurrency(user?.availableAmount)}
      />
      {user?.stocks.map((stock) => (
        <DepotCard
          key={stock.name}
          name={stock.name}
          stat={formatCurrency(stock.value)}
        />
      ))}

      <h2>Trend</h2>
      <TrendChart data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} />
    </div>
  );
};

export default OverviewPage;

OverviewPage.getLayout = (page) => {
  return <Layout heading="Overview">{page}</Layout>;
};
