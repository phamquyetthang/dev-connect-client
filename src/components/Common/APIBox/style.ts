import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const APIBoxWrapper = styled.div`
  padding: 8px;
  border-radius: 4px;
  background-color: ${color('background2')};
  box-shadow: 0 2px 6px 2px ${color('shadow')};
  color: ${color('text1')};
  display: grid;
  grid-template-columns: 1fr 150px 200px repeat(3, 32px);
  align-items: center;
  justify-items: center;
  border-left: 6px solid;
  column-gap: 24px;

  .ApiBox__basic {
    justify-self: stretch;
    &__url {
      display: grid;
      grid-template-columns: 40px 1fr 1fr;
      align-items: center;
      column-gap: 12px;
    }
  }
  .icon_link {
    width: 22px;
    height: 22px;
    fill: ${color('text1')};
  }

  &.GET {
    border-left-color: ${color('info')};
    .ApiBox__basic__url_method {
      color: ${color('info')};
    }
  }
  &.POST {
    border-left-color: ${color('success')};
    .ApiBox__basic__url_method {
      color: ${color('success')};
    }
  }
  &.DELETE {
    border-left-color: ${color('error')};
    .ApiBox__basic__url_method {
      color: ${color('error')};
    }
  }
  &.PUT {
    border-left-color: ${color('warning')};
    .ApiBox__basic__url_method {
      color: ${color('warning')};
    }
  }
`;
