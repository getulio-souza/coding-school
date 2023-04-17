import styled from "styled-components";
import {
  BorderRadius,
  Colors,
  FontWeights,
  NavButton,
} from "../../shared/DesignTokens";

export const CursosContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${Colors.NEUTRAL_WHITE};
`;

export const CursosContentContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 40px 0px 0px 40px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CursosContent = styled.div``;

export const CursosImgContainer = styled.div`
  display: flex;
  justify-content:center;
`;

export const CursosImg = styled.img`
  width:300px;
  min-width:300px;
  max-width:300px;
`;

export const CursosContentTitle = styled.h1`
  font-size: 32px;
  min-width: 400px;
  max-width: 400px;
`;

export const CursosContentText = styled.h4`
  min-width: 400px;
  max-width: 400px;
  font-weight: normal;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;

export const Button1 = styled.button`
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  color: ${Colors.BUTTON_TEXT_WHITE};
  width: 148px;
  height: 54px;
  cursor: pointer;
  border-radius: ${BorderRadius.BUTTON_BORDER};
  transition: 0.5s;
  &:hover {
    color: ${Colors.NEUTRAL_BLACK};
    border: 1px solid #000;
  }
`;

export const Button2 = styled.button`
  background-color: ${Colors.NEUTRAL_WHITE};
  width: 148px;
  height: 54px;
  cursor: pointer;
  border-radius: ${BorderRadius.BUTTON_BORDER};
  transition: 0.5s;
  &:hover {
    opacity: 0.9;
    border: 1px solid #000;
  }
`;

export const CursosDescriptionContainer = styled.article`
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

export const CursosContentSubtitle = styled.h2`
  font-size: 22px;
  min-width: 400px;
  max-width: 400px;
  margin-bottom: 0;
`;
