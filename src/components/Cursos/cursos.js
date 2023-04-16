import React from "react";

import devimg from "../../assets/images/dev-img.png";

import {
  CursosContainer,
  CursosContentContainer,
  CursosContent,
  CursosContentTitle,
  CursosContentText,
  ButtonsContainer,
  CursosImgContainer,
  CursosImg,
  Button1,
  CursosDescriptionContainer,
  CursosContentSubtitle,
} from "./cursos.styles";

function Cursos() {
  return (
    <>
      <CursosContainer>
        <CursosContentContainer>
          <CursosContent>
            <CursosContentTitle>
              Seja bem vindo a nossa plataforma!
            </CursosContentTitle>
            <CursosContentText>
              Estamos aqui para te desenvolver profissionalmente e te alocar no
              mercado de trabalho, e o melhor: de forma gratuita
            </CursosContentText>
            <ButtonsContainer>
              <Button1>Quero estudar!</Button1>
              <Button1>Quero contratar!</Button1>
            </ButtonsContainer>
          </CursosContent>
          <CursosDescriptionContainer>
            <CursosImgContainer>
              <CursosImg src={devimg}></CursosImg>
            </CursosImgContainer>
            <CursosContentSubtitle>
              Seja bem vindo a nossa plataforma!
            </CursosContentSubtitle>
            <CursosContentText>
              Sabemos que na área de programação, vagas são o que não faltam,
              por isso, unimos o útil ao agradável. Temos empresas parceiras
              focadas em tecnologia que verificam seu desempenho e currículo,
              assim você pode conseguir um bom emprego na área mais moderna do
              Brasil e do mundo :)
            </CursosContentText>
          </CursosDescriptionContainer>
        </CursosContentContainer>
      </CursosContainer>
    </>
  );
}

export default Cursos;
