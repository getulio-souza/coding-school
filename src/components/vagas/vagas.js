import React from "react";

import devimg from "../../assets/images/intro-img (1).png";
import devimg2 from "../../assets/images/intro-img (1).jpeg";

import {
  VagasContainer,
  VagasContentContainer,
  VagasContent,
  VagasContentTitle,
  VagasContentText,
  ButtonsContainer,
  FormationInfoContainer,
  VagasImgContainer,
  VagasImg,
  VagasImg2,
  FormacaoButton,
  VagasDescriptionContainer,
  VagasContentSubtitle,
} from "./vagas.styles";

import { GoBackBtn } from "../../assets/global/goBackBtn";

import { Link } from "react-router-dom";

function Vagas() {
  return (
    <>
      <VagasContainer>
        <GoBackBtn>
          <Link to="/quero-estudar"
          style = {
            {
              color: "white",
              textDecoration: "none"
            }
          }
          >
          Voltar  
          </Link>
        </GoBackBtn>
        <VagasContentContainer>
          <VagasContent>
            <VagasContentTitle>
              Nossas Vagas
            </VagasContentTitle>
            <VagasContentText>
              Conheça um pouco mais de nossa plataforma! Podemos te ajudar a encontra a sua primeira oportunidade como programador.
            </VagasContentText>
            <ButtonsContainer>
              <Link to="/vagas-front-end">
              <FormacaoButton>Vagas Front-end</FormacaoButton>
              </Link>
              <Link to="/vagas-front-end">
              <FormacaoButton>Vagas Back-end</FormacaoButton>
              </Link>
              <Link to="/vagas-front-end">
              <FormacaoButton>Vagas Fullstack</FormacaoButton>
              </Link>
              <Link to="/vagas-front-end">
              <FormacaoButton>Outras Vagas</FormacaoButton>
              </Link>
            </ButtonsContainer>
            <FormationInfoContainer>
            <VagasContentSubtitle>
              Sobre nossas vagas
            </VagasContentSubtitle>
            <VagasContentText>
              Sabemos que na área de programação, vagas são o que não faltam,
              por isso, unimos o útil ao agradável. Temos empresas parceiras
              focadas em tecnologia que verificam seu desempenho e currículo,
              assim você pode conseguir um bom emprego na área mais moderna do
              Brasil e do mundo :)
            </VagasContentText>
            </FormationInfoContainer>

          </VagasContent>
          <VagasDescriptionContainer>
            <VagasImgContainer>
              {/* <VagasImg src={devimg} alt="homem-sentado-com-notebook-no-colo"></VagasImg> */}
              <VagasImg2 src={devimg2} alt="imagem-de-uma-agenda-fechada-com-marcador-a-mostra"></VagasImg2>
            </VagasImgContainer>
          </VagasDescriptionContainer>
        </VagasContentContainer>
      </VagasContainer>
    </>
  );
}

export default Vagas;
