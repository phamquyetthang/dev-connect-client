import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  display: flex;
  margin: 6px;
  svg{
    width: 1.5em;
    height: 1.5em;
    fill: green;
  }
  .item{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-left: 6px solid yellow;
    &.success{
      border-left-color: green;
    }
  }
  .editView{
    svg{
      fill: gray;
    }
    .editStyle{
      margin-right: 10px;
    }
  }
`;
