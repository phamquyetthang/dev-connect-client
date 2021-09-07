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

  &.show {
    display: flex;
  }

  .modal {
    padding: 1.5em;
    background-color: ${color('background2')};
    border-radius: 8px;

    &__header {
      text-transform: uppercase;
    }

    &__body {
      margin-bottom: 1em;
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
