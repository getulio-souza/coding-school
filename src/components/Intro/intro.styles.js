import styled from "styled-components";
import {
  BorderRadius,
  Colors,
  FontWeights,
  NavButton,
} from "../../shared/DesignTokens";

export const IntroContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.NEUTRAL_WHITE};
`;

export const IntroNavbar = styled.nav``;

export const NavbarUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  padding: 20px 40px 0px 0px;
`;

export const NavbarLoginButton = styled.li`
  border: 1px solid #2a2a2a;
  color: ${Colors.BUTTON_TEXT_BLACK};
  padding: 8px 31px;
  border-radius: 10px;
  font-weight: ${FontWeights.BOLD};
  cursor: pointer;
  transition: 0.5s;
  font-size: 20px;
  &:hover {
    color: ${NavButton.DARK_TEXT_HOVER};
    opacity: 0.6;
  }
`;

export const NavbarSubscribeButton = styled.li`
  background-color: ${Colors.BUTTON_BACKGROUND_PURPLE};
  color: ${Colors.BUTTON_TEXT_WHITE};
  padding: 8px 31px;
  border-radius: 10px;
  font-weight: ${FontWeights.BOLD};
  cursor: pointer;
  transition: 0.5s;
  font-size: 20px;
  &:hover {
    background-color: ${Colors.BUTTON_BACKGROUND_PURPLE_LIGHT};
  }
`;

export const IntroContentContainer = styled.article`
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

export const IntroContent = styled.div``;

export const IntroImgContainer = styled.div``;

export const IntroImg = styled.img`
  width: 600px;
  min-width: 600px;
  max-width: 600px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const IntroContentTitle = styled.h1`
  font-size: 32px;
  min-width: 400px;
  max-width: 400px;
  @media (max-width: 900px) {
    font-size: 52px;
  }
`;

export const IntroContentText = styled.h4`
  min-width: 400px;
  max-width: 400px;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  width: 450px;
  min-width: 450px;
  max-width: 450px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;

export const Button1 = styled.button`
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
