import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  margin: 12px;
  .item {
    width: 100%;
    display: grid;
    grid-template-columns: 30px 100px 1fr 100px 80px;
    column-gap: 20px;
    border-left: 6px solid yellow;
    align-items: center;
    padding: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      text-align: start;
      -webkit-line-clamp: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &.success {
      border-left-color: green;
    }
    .editView {
      display: flex;
      justify-content: space-between;
    }
  }
`;
