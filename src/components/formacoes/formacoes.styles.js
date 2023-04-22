import styled from "styled-components";
import {
    BorderRadius,
    Colors,
} from "../../shared/DesignTokens";

export const FormacoesContainer = styled.section `
  width: 100%;
  height: 100%;
  background-color: ${Colors.NEUTRAL_WHITE};
`;

export const FormacoesContentContainer = styled.article `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 80px 0px 0px 40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormacoesContent = styled.div ``;

export const FormacoesImgContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap:40px;
`;

export const FormacoesImg = styled.img `
  width:500px;
  min-width:500px;
  max-width:500px;
`;

export const FormacoesImg2 = styled.img `
  width:500px;
  min-width:500px;
  max-width:500px;
  @media (max-width:900px){
    display: none;
  }
`;

export const FormacoesContentTitle = styled.h1 `
  font-size: 32px;
  min-width: 400px;
  max-width: 400px;
`;

export const FormacoesContentText = styled.h4 `
  font-size: 20px;
  line-height: 28px;
  width: 450px;
  min-width: 450px;
  max-width: 450px;
  font-weight: normal;
`;

export const ButtonsContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 30px;
  padding: 20px 0px;
`;

export const FormationInfoContainer = styled.div`
  padding-top: 20px;
`;

export const FormacaoButton = styled.button `
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  color: ${Colors.BUTTON_TEXT_WHITE};
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  font-size: 18px;
  cursor: pointer;
  border-radius: ${BorderRadius.BUTTON_BORDER};
  transition: 0.5s;
  &:hover {
    color: ${Colors.NEUTRAL_BLACK};
    border: 1px solid #000;
  }
`;

export const FormacoesDescriptionContainer = styled.article `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 0px 0px 40px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormacoesContentSubtitle = styled.h2 `
  font-size: 26px;
  min-width: 400px;
  max-width: 400px;
  margin-bottom: 0;
`;
