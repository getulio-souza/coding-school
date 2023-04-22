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
  CursosInfoContainer,
  CursosImg,
  Button1,
  CursosDescriptionContainer,
  CursosContentSubtitle,
} from "./cursos.styles";

import { GoBackBtn } from "../../assets/global/goBackBtn";

import { Link } from "react-router-dom";

function Cursos() {
  return (
    <>
      <CursosContainer>
        <GoBackBtn>
          <Link
            to="/"
            style={{color: "white", textDecoration: "none"}}>
            Voltar
          </Link>
        </GoBackBtn>
        <CursosContentContainer>
          <CursosContent>
            <CursosContentTitle>
              Olá, Isabella Assis Medeiros
            </CursosContentTitle>
            <CursosContentText>
              Estamos aqui para te desenvolver profissionalmente e te alocar no
              mercado de trabalho, e o melhor: de forma gratuita.
            </CursosContentText>
            <ButtonsContainer>
              <Button1>
                <Link
                  to="/nossas-formacoes"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Encontrar cursos
                </Link>
              </Button1>
              <Button1>Encontrar vagas na minha área</Button1>
            </ButtonsContainer>
          </CursosContent>
          <CursosDescriptionContainer>
            <CursosImgContainer>
              <CursosImg
                src={devimg}
                alt="homem-sentado-com-notebook-no-colo"
              ></CursosImg>
            </CursosImgContainer>
            <CursosInfoContainer>
              <CursosContentSubtitle>
                Qual o nosso propósito?
              </CursosContentSubtitle>
              <CursosContentText>
                Sabemos que na área de programação, vagas são o que não faltam,
                por isso, unimos o útil ao agradável. Temos empresas parceiras
                focadas em tecnologia que verificam seu desempenho e currículo,
                assim você pode conseguir um bom emprego na área mais moderna do
                Brasil e do mundo :)
              </CursosContentText>
            </CursosInfoContainer>
          </CursosDescriptionContainer>
        </CursosContentContainer>
      </CursosContainer>
    </>
  );
}

export default Cursos;
