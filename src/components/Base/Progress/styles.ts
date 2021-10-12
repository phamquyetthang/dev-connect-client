import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  height: 24px;
  min-width: 80px;
  background-color: ${color('background1')};
  font-size: 12px;
  border-radius: 4px;
  overflow: hidden;
  .percent {
    background-color: ${color('success')};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
