import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  display: flex;
  margin: 6px;
  svg {
    width: 1.5em;
    height: 1.5em;
    fill: green;
  }
  .item {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-left: 6px solid yellow;
    &.success {
      border-left-color: green;
    }
    span {
      width: 10%;
      text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 1; // <- you can change rows number
      -webkit-box-orient: vertical;
      vertical-align: bottom;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .editView {
    svg {
      fill: gray;
    }
    .editStyle {
      margin-right: 10px;
    }
  }
`;
