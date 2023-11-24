import styled from "styled-components";
import {
  BorderRadius,
  Colors,
} from "../../shared/DesignTokens";

export const VagasContainer = styled.section `
  width: 100%;
  height: 100%;
  background-color: ${Colors.NEUTRAL_WHITE};
`;

export const VagasContentContainer = styled.article `
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

export const VagasContent = styled.div ``;

export const VagasImgContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap:40px;
`;

export const VagasImg = styled.img `
  width:500px;
  min-width:500px;
  max-width:500px;
`;

export const VagasImg2 = styled.img `
  width:500px;
  min-width:500px;
  max-width:500px;
  @media (max-width:900px){
    display: none;
  }
`;

export const VagasContentTitle = styled.h1 `
  font-size: 32px;
  min-width: 400px;
  max-width: 400px;
`;

export const VagasContentText = styled.h4 `
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

export const FormationInfoContainer = styled.div `
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

export const VagasDescriptionContainer = styled.article `
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

export const VagasContentSubtitle = styled.h2 `
  font-size: 26px;
  min-width: 400px;
  max-width: 400px;
  margin-bottom: 0;
`;
