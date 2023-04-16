import React from "react";
import Close from '@material-ui/icons/Close'

import {
  ModalContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalInputBox,
  ModalInputLabel,
  ModalInput,
  ModalLogiButtonContainer,
  ModalLogiButton,
} from "./modal-Login.styles";

import '../../assets/global/global.css'

function ModalLogin({closeModal}) {
  return (
    <>
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitle>Login</ModalTitle>
          <Close
            className="close-btn-modal"
            onClick = {
              () => {
                closeModal(false)
              }
            }
          />
        </ModalTitleContainer>
        <ModalInputBox>
          <ModalInputLabel>E-mail</ModalInputLabel>
          <ModalInput type="email"></ModalInput>
        </ModalInputBox>
        <ModalInputBox>
          <ModalInputLabel>CPF</ModalInputLabel>
          <ModalInput type="text" maxLength={11}></ModalInput>
        </ModalInputBox>
        <ModalInputBox>
          <ModalInputLabel>Senha</ModalInputLabel>
          <ModalInput type="password" maxLength={15}></ModalInput>
        </ModalInputBox>
        <ModalLogiButtonContainer>
          <ModalLogiButton onClick={()=> {}}>Login</ModalLogiButton>
        </ModalLogiButtonContainer>
      </ModalContainer>
    </>
  );
}

export default ModalLogin;
