import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const ListAvtWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .avt_mem {
    background-color: ${color('background1')};
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${color('text1')};
    margin-left: -6px;
    box-shadow: 0 2px 6px 2px ${color('shadow')};
    svg {
      fill: ${color('text1')};
      width: 16px;
    }
  }
`;
