import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  border: hidden;
  background-color: ${color('button1')};
  font-size: 12px;
  color: ${color('textBtn1')};
  cursor: pointer;

  &.btn-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    svg {
      width: 14px;
      height: 14px;
      fill: ${color('textBtn1')};
    }
  }

  &:active {
    opacity: 0.8;
  }

  span {
    text-transform: uppercase;
    font-weight: 700;
  }

  &.disable {
    opacity: 0.5;
  }

  &.gray {
    background-color: ${color('button2')};
    color: ${color('textBtn2')};
  }

  &.btn-loading {
    position: relative;
    span {
      opacity: 0;
    }
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid transparent;
      border-top-color: #ffffff;
      border-radius: 50%;
      animation: button-loading-spinner 1s ease infinite;
    }
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`;
