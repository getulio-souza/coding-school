import React, { useState } from "react";

import {
  IntroContainer,
  IntroNavbar,
  NavbarUl,
  NavbarLoginButton,
  NavbarSubscribeButton,
  IntroContentContainer,
  IntroContent,
  IntroContentTitle,
  IntroContentText,
  ButtonsContainer,
  IntroImgContainer,
  IntroImg,
  Button1,
} from "./intro.styles";

import ModalLogin from "../modal-login/modal-Login";
import ModalRegister from "../modal-register/modal-Register";
import { Link } from "react-router-dom";
import ImgIntro from "../../assets/images/intro-img (2).jpeg";

function Intro() {
  //logica para abrir o modal de login
  const [openLoginModal, SetOpenLoginModal] = useState(false);

  //logica para abrir o modal de cadastro
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);

  return (
    <>
      <IntroContainer>
        <IntroNavbar>
          <NavbarUl>
            <NavbarLoginButton
              onClick={() => {
                SetOpenLoginModal(true);
              }}
            >
              Entrar
            </NavbarLoginButton>
            {openLoginModal && <ModalLogin closeModal={SetOpenLoginModal} />}
            <NavbarSubscribeButton
              onClick={() => {
                setOpenSubscribeModal(true);
              }}
            >
              Cadastrar
            </NavbarSubscribeButton>
            {openSubscribeModal && (
              <ModalRegister closeModal={setOpenSubscribeModal} />
            )}
          </NavbarUl>
        </IntroNavbar>
        <IntroContentContainer>
          <IntroContent>
            <IntroContentTitle>
              Seja bem vindo a BeDev!
            </IntroContentTitle>
            <IntroContentText>
              Estamos aqui para te desenvolver profissionalmente e te alocar no
              mercado de trabalho, e o melhor: de forma gratuita
            </IntroContentText>
            <ButtonsContainer>
              <Link to="/quero-estudar">
                <Button1>Quero estudar!</Button1>
              </Link>
              <Link to="/vagas">
              <Button1>Quero trabalhar</Button1>
              </Link>
            </ButtonsContainer>
          </IntroContent>
          <IntroImgContainer>
            <IntroImg src={ImgIntro}></IntroImg>
          </IntroImgContainer>
        </IntroContentContainer>
      </IntroContainer>
    </>
  );
}

export default Intro;
