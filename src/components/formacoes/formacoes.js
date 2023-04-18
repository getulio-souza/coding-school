import React from "react";

import devimg from "../../assets/images/photo-2.jpeg";
import devimg2 from "../../assets/images/new-image.jpg";

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

function Formacoes() {
  return (
    <>
      <FormacoesContainer>
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
              Sabemos que na área de programação, vagas são o que não faltam,
              por isso, unimos o útil ao agradável. Temos empresas parceiras
              focadas em tecnologia que verificam seu desempenho e currículo,
              assim você pode conseguir um bom emprego na área mais moderna do
              Brasil e do mundo :)
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
