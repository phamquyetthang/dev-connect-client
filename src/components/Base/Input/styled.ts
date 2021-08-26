import { color } from 'src/lib/theme/mixins';
import styled from 'styled-components';

export const InputContain = styled.div`
  span {
    color: ${color('error')};
  }
`;

export const InputWrapper = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;
