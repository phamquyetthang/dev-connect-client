import Box from 'src/components/Base/Box';
import styled from 'styled-components';

export const RequestBoxWrapper = styled(Box)`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  .rq-header {
    display: flex;
    flex-direction: row;
    text-align: start;
    justify-content: space-between;
    align-items: center;
  }

  .json-type {
    align-items: center;
    margin-bottom: 8px;
    span {
      margin-right: 12px;
    }
  }

  .rq-select-type {
    width: 224px;
  }
  .rq-form-data {
    display: flex;
    flex-direction: column;

    &__item {
      display: grid;
      grid-template-columns: 1fr 1fr 80px 1fr 50px;
      column-gap: 16px;
      margin-bottom: 12px;
      align-items: center;

      &__field {
        padding: 4px;
      }

      button {
        border: hidden;
        background-color: inherit;

        svg {
          width: 22px;
        }
      }
    }

    &__add_btn {
      width: 200px;
      align-self: center;
    }
  }
  
  .response-text {
    min-height: 160px;
    flex: 1;
    padding: 12px;
  }
`;
