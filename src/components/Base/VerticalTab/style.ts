import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const VerticalTabWrapper = styled.div`
  min-height: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 50px;
  .verticalTab {
    &__tab {
      border: 1px solid ${color('border')};
      background-color: ${color('background1')};
      height: 100%;
    }
    &__menu {
      padding: 12px 6px;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      background-color: ${color('background1')};
      margin-bottom: 4px;
      transition: all 5s;
      text-align: end;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &.active {
        background-color: ${color('header')};
      }

      &__label {
        display: none;
        text-transform: lowercase;
        white-space: pre;
      }
      svg {
        width: 20px;
        fill: ${color('text1')};
        margin-left: 4px;
      }
      &:hover {
        width: 100px;
        transition: all 5s ease-out;
        justify-content: space-around;
        .verticalTab__menu__label {
          display: block;
        }
      }
    }
  }
`;
