import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const PopupExtendWrapper = styled.div`
  position: relative;
  .popupElement {
    position: absolute;
    z-index: 50;
    padding: 12px;
    background-color: ${color('background2')};
    border: 1px solid ${color('border')};
    box-shadow: 0px 2px 6px 2px ${color('hoverShadow')};
    border-radius: 8px;
    display: none;
    white-space: pre;
    color: ${color('text1')};
    
    &.show {
      display: flex;
      flex-direction: column;
    }

    &.left {
      left: calc(100% + 4px);
      top: 0;
    }

    &.right {
      right: 100%;
      top: 0;
    }

    &.top {
      bottom: 100%;
    }

    &.bottom {
      top: 100%;
    }
  }
`;
