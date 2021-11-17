import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 200;

  &.show {
    display: flex;
  }

  .modal {
    background-color: ${color('background2')};
    border-radius: 8px;
    min-width: 300px;
    text-align: start;

    &__header {
      padding: 16px;
      margin: 0;
      text-transform: uppercase;
      color: ${color('text1')};
      font-size: 16px;
      background-color: ${color('header')};
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &__body {
      margin-bottom: 1em;
      padding: 12px;
      color: ${color('text1')};
    }

    &__footer {
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid ${color('borderInput')};
      padding-top: 1em;
      button {
        margin-left: 1em;
      }
    }
  }
`;
