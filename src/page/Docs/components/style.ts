import styled from 'styled-components';

export const AddDocApiWrapper = styled.form`
  width: 100%;

  .createDoc {
    &__header {
      display: grid;
      grid-template-columns: 160px 200px 1fr;
      column-gap: 1em;
    }
  }
  .select_member{
    margin-bottom: 12px;
  }
  .json-edit{
    text-align: start;
  }
`;
