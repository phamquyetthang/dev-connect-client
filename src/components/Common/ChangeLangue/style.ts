import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const ChangeLangueWrapper = styled.div`
  position: relative;

  .lang-btn {
    background-color: inherit;
    border: hidden;
    margin-right: 16px;

    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  .change-langues-option {
    position: absolute;
    right: 0;
    width: 150px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${color('borderInput')};
    border-radius: 8px;
    overflow: hidden;

    .lang_option {
      cursor: pointer;
      text-align: start;
      padding: 12px;
      background-color: #fff;
      border: hidden;
    }
  }
`;
