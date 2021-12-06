import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 24px;
  svg {
    fill: ${color('text1')};
    padding: 8px;
    border: 1px solid ${color('border')};
    border-radius: 4px;
    margin: 0 2px;
    cursor: pointer;
    width:14px;
    height:14px;
    &:hover {
      background-color: ${color('header')};
    }
  }
  span {
    color: ${color('text1')};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${color('border')};
    border-radius: 4px;
    width: 28px;
    height: 28px;
    margin: 0 2px;
    cursor: pointer;
    &:hover {
      background-color: ${color('header')};
    }
  }
  .active {
    background-color: ${color('header')};
  }
`;
