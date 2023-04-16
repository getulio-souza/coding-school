import styled from "styled-components";

import { BorderRadius, Colors } from "../../shared/DesignTokens";

export const ModalContainer = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 10px 10px 10px 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.BUTTON_BACKGROUND_WHITE};
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
  padding-bottom: 5px;
  font-size: 14px;
`;

export const ModalSelect = styled.select`
  max-width: 170px;
  min-width: 170px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #827e7e;
  background-color: transparent;
`;

export const ModalOption = styled.option``;

export const ModalInput = styled.input`
  color: ${Colors.BUTTON_TEXT_BLACK};
  border: none;
  border-bottom: 1px solid #2a2a2a;
  max-width: 170px;
`;

export const ModalLogiButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
`;

export const ModalLogiButton = styled.button`
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  border-radius: ${BorderRadius.BUTTON_BORDER};
  height: 40px;
  max-height: 40px;
  width: 150px;
  max-width: 150px;
  color: ${Colors.BUTTON_TEXT_WHITE};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.9;
  }
`;

export const ModalRegisterProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const ModalRegisterProgressBar = styled.div`
  width: 150px;
  max-width: 150px;
  min-height: 8px;
  max-height: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  position: relative;
`;

export const ModalRegisterProgressBarValue = styled.div``;

export const ModalProgressBarState = styled.span`
  font-size: 10px;
`;
