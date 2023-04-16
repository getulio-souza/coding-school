import styled from "styled-components";

import { BorderRadius, Colors } from "../../shared/DesignTokens";

export const ModalContainer = styled.div`
  width: 250px;
  height: 400px;
  box-shadow: 1px 1px 3px 2px #ded4d4;
  border-radius:10px 10px 10px 10px;
  position:fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color:${Colors.BUTTON_BACKGROUND_WHITE};
`;

export const ModalTitleContainer = styled.div`
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  margin-bottom: 20px;
  height: 70px;
  border-radius: 10px 10px 0px 0px;
  position: relative;
`;

export const ModalTitle = styled.h3`
  padding: 20px 0px 0px 20px;
  color: ${Colors.BUTTON_TEXT_WHITE};
`;

export const ModalInputBox = styled.div`
  padding: 20px 0px 0px 20px;
  display: flex;
  flex-direction: column;
`;

export const ModalInputLabel = styled.label`
    padding-bottom:5px;
    font-size: 14px;
`;
export const ModalInput = styled.input`
  max-width: 170px;
  min-width: 170px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #827e7e;
`;

export const ModalLogiButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const ModalLogiButton = styled.button`
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  border-radius: ${BorderRadius.BUTTON_BORDER};
  height:40px;
  max-height:40px;
  width: 150px;
  max-width: 150px;
  color:${Colors.BUTTON_TEXT_WHITE};
  cursor: pointer;
  transition:.5s;
  &:hover{
    opacity:0.9;
  }
`;
