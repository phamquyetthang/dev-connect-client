import { color } from "src/lib/theme/mixin";
import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    input {
        width: 14px;
        height: 14px;
    }
    label {
        font-size: 14px;
        color: ${color('text1')}
    }
`;