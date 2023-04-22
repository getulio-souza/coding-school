import styled from "styled-components";

import { Colors } from "../../shared/DesignTokens";

export const GoBackBtn = styled.button`
    position: absolute;
    top: 40px;
    left: 60px;
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    background-color: #390072;
    cursor: pointer;
    transition: .5s;
    &:hover{
        opacity:0.7;
    }
`;