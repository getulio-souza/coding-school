import styled from 'styled-components';

export const BackgroundContainer = styled.div `
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MainContainer = styled.section`
 @media (max-width:900px){
  display:grid;
  grid-template-columns: 1fr 1fr;
 }
`
export const Header = styled.div `
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.h1 `
  font-size: 30px;
  font-weight: 700;
  padding-top: 80px;
  text-align: center;
`;

export const BackgroundCard = styled.div `
  min-width: 270px;
  max-width: 270px;
  background-color: #e6deee;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 60px;
  border-radius: 10px;
`;

export const CardInnerBox = styled.div`
  width: 230px;
  min-width:230px;
  max-width:230px;
`;

export const JobTitle = styled.div `
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const CompanyLocation = styled.div `
  background-color: #390072;
  border-radius: 10px;
  align-items: center;
`;

export const CompanyLocationInfo = styled.div `
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px 10px;
`;

export const ShowMoreBtn = styled.button`
background-color: rgb(94, 53, 154);
color: #fff;
border-radius:10px;
padding: 15px 20px;
border: none;
margin-top:10px;
cursor: pointer;
transition: 0.5s;
&:hover{
  opacity:0.8
}
`;
