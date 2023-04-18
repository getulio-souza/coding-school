import React from "react";

import devimg from "../../assets/images/photo-2.jpeg";

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
} from "./formacoes.styles";

function Formacoes() {
  return (
    <>
      <CursosContainer>
        <CursosContentContainer>
          <CursosContent>
            <CursosContentTitle>
              Nossos Cursos
            </CursosContentTitle>
            <CursosContentText>
              Conheça um pouco mais de nossa plataforma! Podemos te ajudar a conhecer e se especializar em sua área de interesse.
            </CursosContentText>
            <ButtonsContainer>
              <Button1>Formação Front-end</Button1>
              <Button1>Formação Back-end</Button1>
              <Button1>Formação Fullstack</Button1>
              <Button1>Outras formações</Button1>
            </ButtonsContainer>
            <CursosContentSubtitle>
              Nossas formações
            </CursosContentSubtitle>
            <CursosContentText>
              Sabemos que na área de programação, vagas são o que não faltam,
              por isso, unimos o útil ao agradável. Temos empresas parceiras
              focadas em tecnologia que verificam seu desempenho e currículo,
              assim você pode conseguir um bom emprego na área mais moderna do
              Brasil e do mundo :)
            </CursosContentText>
          </CursosContent>
          <CursosDescriptionContainer>
            <CursosImgContainer>
              <CursosImg src={devimg}></CursosImg>
              <CursosImg src={devimg}></CursosImg>
            </CursosImgContainer>
          </CursosDescriptionContainer>
        </CursosContentContainer>
      </CursosContainer>
    </>
  );
}

export default Formacoes;
