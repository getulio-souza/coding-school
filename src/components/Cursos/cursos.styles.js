import styled from "styled-components";
import {
  BorderRadius,
  Colors,
} from "../../shared/DesignTokens";


export const CursosContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.NEUTRAL_WHITE};
  justify-content: center;
`;

export const CursosContentContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 0px;

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

export const CursosInfoContainer = styled.div`
  padding-top: 20px;
`;
export const CursosImg = styled.img`
  width:400px;
  min-width:400px;
  max-width:400px;
`;

export const CursosContentTitle = styled.h1`
  font-size: 32px;
  min-width: 400px;
  max-width: 400px;
`;

export const CursosContentText = styled.h4`
  font-size: 20px;
  line-height: 28px;
  width: 450px;
  min-width: 450px;
  max-width: 450px;
  font-weight: normal;
  @media (max-width:900px){
    width: 400px;
    min-width: 400px;
    max-width: 400px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

export const Button1 = styled.button`
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  color: ${Colors.BUTTON_TEXT_WHITE};
  width: 350px;
  min-width: 350px;
  max-width: 350px;
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
  padding: 40px 0px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CursosContentSubtitle = styled.h2`
  font-size: 26px;
  min-width: 400px;
  max-width: 400px;
  margin-bottom: 0;
`;
