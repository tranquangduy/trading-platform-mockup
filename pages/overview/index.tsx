import DepotCard from '@/components/molecules/DepotCard';
import TrendChart from '@/components/molecules/TrendChart';
import React from 'react';

const OverviewPage = () => {
  const mock = {
    name: 'Depot Value',
    stat: '€ 1.000.000',
    previousStat: '€ 900.000',
    change: '€ 100.000',
    changeType: 'increase',
  };
  return (
    <div>
      <DepotCard
        name={mock.name}
        stat={mock.stat}
        previousStat={mock.previousStat}
        change={mock.change}
        changeType={mock.changeType}
      />
      <TrendChart data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} />
    </div>
  );
};

export default OverviewPage;
