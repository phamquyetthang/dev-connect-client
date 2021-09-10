import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const CopyFieldWrapper = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
  color: ${color('text1')};
  .copy-btn {
    position: absolute;
    top: 4px;
    right: 8px;
    margin: 0 !important;
    svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
      fill: ${color('text1')}
    }
  }

  p {
    border: 1px solid ${color('borderInput')};
    border-radius: 4px;
    margin: 0;
    background-color: ${color('background1')};
    text-align: start;
    padding: 4px;
    font-style: italic;
  }

  .copy-btn:active {
    svg {
      opacity: 0.5;
    }
  }

  &:active {
    opacity: 0.5;
  }
`;
