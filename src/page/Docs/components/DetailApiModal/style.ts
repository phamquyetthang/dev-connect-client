import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const DetailApiModalWrapper = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  /* overflow-y: hidden; */
  .detailApi {
    &__url {
      display: grid;
      grid-template-columns: 36px 1fr 2fr;
      column-gap: 8px;
      align-items: center;
      margin-bottom: 12px;
    }

    &__info {
      flex: 1;
      .verticalTab__tab {
        max-height: calc(70vh - 30px);
        overflow-y: auto;
      }
    }
  }
`;

export const CodeSnippetWrapper = styled.div`
  padding: 16px;

  .copy-zone {
    background-color: ${color('header')};
    margin-top: 16px;
    border-radius: 4px;
    p {
      background-color: inherit;
      font-size: 14px;
    }
  }
`;
