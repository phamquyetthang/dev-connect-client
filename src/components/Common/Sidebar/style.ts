import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
  display: flex;
  width: 56px;
  background-color: ${color('header')};
  flex-direction: column;

  .sidebar-menu {
    color: ${color('textBtn1')};
    fill: ${color('textBtn1')};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 56px;
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 12px;
      margin-top: 6px;
    }

    &:hover {
      background-color: ${color('hoverHeader')};
    }
    &.active{
      background-color: ${color('background2')};
    }
  }
`;
