import React from "react";

import devimg from "../../assets/images/intro-img (1).png";
import devimg2 from "../../assets/images/intro-img (1).jpeg";

import {
  FormacoesContainer,
  FormacoesContentContainer,
  FormacoesContent,
  FormacoesContentTitle,
  FormacoesContentText,
  ButtonsContainer,
  FormationInfoContainer,
  FormacoesImgContainer,
  FormacoesImg,
  FormacoesImg2,
  FormacaoButton,
  FormacoesDescriptionContainer,
  FormacoesContentSubtitle,
} from "./formacoes.styles";

import { GoBackBtn } from "../../assets/global/goBackBtn";

import { Link } from "react-router-dom";

function Formacoes() {
  return (
    <>
      <FormacoesContainer>
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
        <FormacoesContentContainer>
          <FormacoesContent>
            <FormacoesContentTitle>
              Nossos Cursos
            </FormacoesContentTitle>
            <FormacoesContentText>
              Conheça um pouco mais de nossa plataforma! Podemos te ajudar a conhecer e se especializar em sua área de interesse.
            </FormacoesContentText>
            <ButtonsContainer>
              <FormacaoButton>Formação Front-end</FormacaoButton>
              <FormacaoButton>Formação Back-end</FormacaoButton>
              <FormacaoButton>Formação Fullstack</FormacaoButton>
              <FormacaoButton>Outras formações</FormacaoButton>
            </ButtonsContainer>
            <FormationInfoContainer>
            <FormacoesContentSubtitle>
              Nossas formações
            </FormacoesContentSubtitle>
            <FormacoesContentText>
              Sabemos que na área de programação, todo o conhecimento é bem-vindo. Por isso preparamos uma serie de trilhas que vão te ajudar a se destacar no mercado de trabalho de tecnologia, seja para Front-End, Back-End ou Fullstack. 
            </FormacoesContentText>
            </FormationInfoContainer>

          </FormacoesContent>
          <FormacoesDescriptionContainer>
            <FormacoesImgContainer>
              <FormacoesImg src={devimg} alt="homem-sentado-com-notebook-no-colo"></FormacoesImg>
              <FormacoesImg2 src={devimg2} alt="imagem-de-uma-agenda-fechada-com-marcador-a-mostra"></FormacoesImg2>
            </FormacoesImgContainer>
          </FormacoesDescriptionContainer>
        </FormacoesContentContainer>
      </FormacoesContainer>
    </>
  );
}

export default Formacoes;
