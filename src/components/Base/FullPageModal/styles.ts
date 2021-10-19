import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const FullPageModalWrapper = styled.div`
  background-color: ${color('background1')};
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 20;
  top: 0;
  display: none;

  &.show {
    display: flex;
    flex-direction: column;
  }
  .fullModal {
    &__body {
      padding: 1em;
      height: calc(100vh - 64px);
      overflow: auto;
    }
  }
`;
