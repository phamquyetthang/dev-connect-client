import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const InputContain = styled.div`
  text-align: start;

  i {
    color: ${color('error')};
    padding-left: 4px;
    font-size: 80%;
  }

  height: 80px;
`;

export const InputWrapper = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 14px;
  margin-bottom: 4px;
  font-size: 14px;
  outline: none;
  border: ${color('borderInput')} 1px solid;
  border-radius: 8px;
  padding: 14px;
`;
