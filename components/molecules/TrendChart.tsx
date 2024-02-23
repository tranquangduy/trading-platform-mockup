import React from 'react';
import Trend from 'react-trend';

type TrendChartProps = {
  data: number[];
};

const TrendChart: React.FC<TrendChartProps> = ({ data }) => {
  return (
    <Trend
      smooth
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      data={data}
      gradient={['#5046e5']}
      radius={10}
      strokeWidth={1.2}
      strokeLinecap={'butt'}
      height={100}
    />
  );
};

export default TrendChart;
