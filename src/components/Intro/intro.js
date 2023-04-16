import React from "react";

import {
  IntroContainer,
  IntroNavbar,
  NavbarUl,
  NavbarLi,
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

import ImgIntro from '../../assets/images/intro-img.JPG'

function Intro() {
  return (
    <>
      <IntroContainer>
        <IntroNavbar>
          <NavbarUl>
            <NavbarLi>Login</NavbarLi>
                <NavbarLi>Register</NavbarLi>
          </NavbarUl>
        </IntroNavbar>
            <IntroContentContainer>
                  <IntroContent>
                      
                                                        < ModalLogin / >

            <IntroContentTitle>
              Seja bem vindo a nossa plataforma!
            </IntroContentTitle>
            <IntroContentText>
              Estamos aqui para te desenvolver profissionalmente e te alocar no
              mercado de trabalho, e o melhor: de forma gratuita
            </IntroContentText>
            <ButtonsContainer>
              <Button1>Quero estudar!</Button1>
              <Button1>Quero contratar!</Button1>
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
