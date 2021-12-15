import styled from 'styled-components';
import { color } from '../../lib/theme/mixin';

export const PreferencesWrapper = styled.div`
  width: 100%;
  background-color: ${color('background1')};
  .itemThemes {
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 40px;
  }
  .itemItem {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-gap: 10px;
  }
  .listSmall {
    cursor: pointer;
    height: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
    &.active {
      border: 2px blue solid;
    }
  }
`;
