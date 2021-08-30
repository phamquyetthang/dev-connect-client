import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 14px;
  border-radius: 8px;
  outline: none;
  border: hidden;
  background-color: ${color('backgroundButton')};
  font-size: 14px;
  color: ${color('textButton')};
  cursor: pointer;

  &.disable {
    opacity: 0.5;
  }

  &.gray {
    background-color: ${color('background3')};
    color: ${color('text2')}
  }
`;
