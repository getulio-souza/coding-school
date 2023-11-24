import React, { useState } from "react";
import Close from "@material-ui/icons/Close";

import {
  ModalContainer,
  ModalTitleContainer,
  ModalInputBoxContainer,
  ModalTitle,
  ModalInputBox,
  ModalInputLabel,
  ModalInput,
  ModalLogiButtonContainer,
  ModalLogiButton,
  ErroMessageLogin,
} from "./modal-Login.styles";

import "../../assets/global/global.css";

function ModalLogin({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    // Verifica se o e-mail é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return false;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      if (validateForm()) {
        // Lógica para realizar o login
        console.log("Login bem-sucedido!");
      }
    }
  };

  return (
    <>
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitle>Login</ModalTitle>
          <Close
            className="close-btn-modal"
            onClick={() => {
              closeModal(false);
            }}
          />
        </ModalTitleContainer>
        <ModalInputBoxContainer>
          <ModalInputBox>
            <ModalInputLabel>E-mail</ModalInputLabel>
            <ModalInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></ModalInput>
          </ModalInputBox>
          <ModalInputBox>
            <ModalInputLabel>Senha</ModalInputLabel>
            <ModalInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></ModalInput>
          </ModalInputBox>
          <ModalLogiButtonContainer>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              {error && <p style={{ color: 'red', fontSize: 10, marginBottom: '10px' }}>{error}</p>}
            </div>
            <ModalLogiButton onClick={handleLogin}>Login</ModalLogiButton>
          </ModalLogiButtonContainer>
        </ModalInputBoxContainer>
      </ModalContainer>
    </>
  );
}

export default ModalLogin;
