import React, { useState } from "react";
import Close from "@material-ui/icons/Close";

import {
  ModalContainer,
  ModalTitleContainer,
  ModalInputBoxContainer,
  ModalTitle,
  ModalInputContainer,
  ModalInputBox,
  ModalInput,
  ModalLogiButtonContainer,
  ModalLogiButton,
} from "./modal-Register.styles";

import "./modal-register.css"
import "../../assets/global/global.css";

function ModalRegister({ closeModal }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return false;
    }

    // Adicione outras validações conforme necessário

    setError("");
    return true;
  };

  const handleRegister = () => {
    if (validateForm()) {
      // Lógica para realizar o cadastro
      console.log("Cadastro bem-sucedido!");
    }
  };

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
        <ModalInputBoxContainer>
          <ModalInputContainer>
            <ModalInputBox>
              <ModalInput
                type="text"
                maxLength={30}
                placeholder="Nome completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </ModalInputBox>
            <ModalInputBox>
              <ModalInput
                type="email"
                maxLength={30}
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ModalInputBox>
            <ModalInputBox>
              <ModalInput
                type="password"
                maxLength={30}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ModalInputBox>
            <ModalInputBox>
              <ModalInput
                type="password"
                maxLength={30}
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </ModalInputBox>
          </ModalInputContainer>
          {error && (
            <p style={{ color: "red", fontSize: 12, textAlign: "center" }}>
              {error}
            </p>
          )}
          <ModalLogiButtonContainer>
            <ModalLogiButton onClick={handleRegister}>Cadastrar</ModalLogiButton>
          </ModalLogiButtonContainer>
        </ModalInputBoxContainer>
      </ModalContainer>
    </>
  );
}

export default ModalRegister;

