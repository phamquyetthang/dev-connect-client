import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const TextAreaContain = styled.div`
  text-align: start;

  label {
    color: ${color('text1')};
    margin-left: 4px;
  }

  i {
    color: ${color('error')};
    padding-left: 4px;
    font-size: 80%;
  }

  height: 100%;
`;

export const TextAreaWrapper = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 14px;
  margin-bottom: 4px;
  font-size: 14px;
  outline: none;
  border: ${color('borderInput')} 1px solid;
  border-radius: 8px;
  padding: 14px;
  background-color: ${color('background2')};
  color: ${color('text1')};
`;
