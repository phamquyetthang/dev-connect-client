import React, { FunctionComponent, memo } from 'react';
import { ProgressBarWrapper } from './styles';
type Percent = `${number}%`;
interface IProps {
  width?: number;
  percent: Percent;
}
const ProgressBar: FunctionComponent<IProps> = memo(({ width, percent }) => {
  return (
    <ProgressBarWrapper style={{ width }}>
      <div className="percent" style={{ width: percent }}>
        {percent > '25%' && percent}
      </div>
    </ProgressBarWrapper>
  );
});

export default ProgressBar;
