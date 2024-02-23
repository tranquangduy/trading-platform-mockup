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
      gradient={['purple', 'violet']}
      radius={10}
      strokeWidth={1}
      strokeLinecap={'butt'}
    />
  );
};

export default TrendChart;
