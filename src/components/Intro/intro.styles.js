import styled from 'styled-components'
import { BorderRadius, Colors, FontWeights } from '../../shared/DesignTokens';

export const IntroContainer = styled.section`
    width:100%;
    height:100%;
    background-color:${Colors.NEUTRAL_WHITE};
`;

export const IntroNavbar = styled.nav``;

export const NavbarUl = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    padding: 10px 40px 0px 0px;
`;

export const NavbarLi = styled.li`
    font-weight:${FontWeights.BOLD};
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        opacity:0.9;
    }
`;

export const IntroContentContainer = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 40px 0px 0px 40px;
    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
`;

export const IntroContent = styled.div`

`;

export const IntroImgContainer = styled.div``;

export const IntroImg = styled.img `

`;

export const IntroContentTitle = styled.h1`
    font-size: 32px;
    min-width: 400px;
    max-width: 400px;
`;

export const IntroContentText = styled.h4` 
    min-width: 400px;
    max-width: 400px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap:20px;
    padding-top: 20px;
`;

export const Button1 = styled.button`
    background-color:${Colors.BUTTON_BACKGROUND_PURPLE};
    color:${Colors.BUTTON_TEXT_WHITE};
    width: 148px;
    height: 54px;
    cursor: pointer;
    border-radius: ${BorderRadius.BUTTON_BORDER};
    transition: 0.5s;
    &:hover{
        opacity:0.9;
        border: 1px solid #000;
    }
`;

export const Button2 = styled.button`
    background-color:${Colors.NEUTRAL_WHITE};
    width: 148px;
    height: 54px;
    cursor: pointer;border-radius: ${BorderRadius.BUTTON_BORDER};
    transition: 0.5s;
    &:hover{
        opacity:0.9;
        border: 1px solid #000;
    }
`;