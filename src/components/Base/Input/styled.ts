import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const InputContain = styled.div`
  text-align: start;

  label{
    color: ${color('text1')};
    margin-left: 4px;
    font-size: 14px;
  }

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
  margin-bottom: 4px;
  font-size: 14px;
  outline: none;
  border: ${color('borderInput')} 1px solid;
  border-radius: 4px;
  padding: 12px;
  background-color: ${color('background2')};
  color: ${color('text1')};
`;