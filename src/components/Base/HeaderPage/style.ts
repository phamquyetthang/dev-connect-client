import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const HeaderPageWrapper = styled.div`
  text-align: start;
  padding: 12px;
  border-bottom: 1px solid ${color('border')};
  display: grid;
  grid-template-columns: 30px 200px 1fr 300px;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .right-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
