import React from "react";

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

function ModalLogin() {
  return (
    <>
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitle>Login</ModalTitle>
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
          <ModalLogiButton>Login</ModalLogiButton>
        </ModalLogiButtonContainer>
      </ModalContainer>
    </>
  );
}

export default ModalLogin;
