import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const BoxWrapper = styled.div`
  background-color: ${color('background2')};
  box-shadow: inset -1px -1px 0px ${color('shadow')};
  padding: 1.2em 1em;
  border-radius: 4px;
  color: ${color('text1')};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 6px 2px ${color('hoverShadow')};
  }
`;
