import React from "react";
import Close from "@material-ui/icons/Close";

import {
  ModalContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalSubtitle,
  ModalInputBox,
  ModalInput,
  ModalSelect,
  ModalOption,
  ModalLogiButtonContainer,
  ModalLogiButton,
  ModalRegisterProgressBarContainer,
  ModalRegisterProgressBar,
  ModalRegisterProgressBarValue,
  ModalProgressBarState
} from "./modal-Register.styles";

import "./modal-register.css"
import "../../assets/global/global.css";

function ModalRegister({ closeModal }) {
  return (
    <>
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitle>Cadastre-se</ModalTitle>
          <Close
            className="close-btn-modal"
            onClick={() => {
              closeModal(false);
            }}
          />
        </ModalTitleContainer>
        <ModalSubtitle>Dados currículares</ModalSubtitle>
        <ModalInputBox>
          <ModalSelect>
            <ModalOption>Sua última formação</ModalOption>
            <ModalOption value={0}>formação 1</ModalOption>
            <ModalOption>formação 2</ModalOption>
            <ModalOption>formação 3</ModalOption>
          </ModalSelect>
        </ModalInputBox>
        <ModalInputBox>
          <ModalInput
            type="text" 
            maxLength={11}
            placeholder="Suas experiências anteriores"
          ></ModalInput>
        </ModalInputBox>
        <ModalInputBox>
          <ModalInput
            type="text"
            maxLength={15}
            placeholder = "Seu objetivo"
          ></ModalInput>
        </ModalInputBox>
        <ModalLogiButtonContainer>
          <ModalLogiButton>Continuar</ModalLogiButton>
        </ModalLogiButtonContainer>

        <ModalRegisterProgressBarContainer>
          <ModalRegisterProgressBar>
            <ModalRegisterProgressBarValue
            className="progress new-progress"
            ></ModalRegisterProgressBarValue>
          </ModalRegisterProgressBar>
          <ModalProgressBarState>3/3</ModalProgressBarState>
        </ModalRegisterProgressBarContainer>

      </ModalContainer>
    </>
  );
}

export default ModalRegister;
