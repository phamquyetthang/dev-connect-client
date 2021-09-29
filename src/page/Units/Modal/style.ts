import styled from 'styled-components';

export const AddDocApiWrapper = styled.form`
  width: 100%;

  .createDoc {
    &__header {
      display: grid;
      grid-template-columns: 120px 200px 1fr;
      column-gap: 1em;
    }
  }

  .json-edit{
    text-align: start;
  }
`;
