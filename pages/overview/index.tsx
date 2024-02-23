import DepotCard from '@/components/molecules/DepotCard';
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
    </div>
  );
};

export default OverviewPage;
