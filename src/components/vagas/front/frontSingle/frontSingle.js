import React from 'react'

import {
  MainContainer,
  BackgroundContainer,
  Header,
  TitleJob,
  City,
  SalaryAndRatingContainer,
  RatingContainer,
  JobDescription,
  JobTitleDescription,
  RequirementTopic,
  SingleRequirement,
  SingleRequirementIcon,
  BtnContainer,
  ApplyJobBtn,
}
  from './frontSingle.styles'

import check from "../../../../assets/images/check.png"
import jobLogo from "../../../../assets/images/job-logo.png"
import starIcon2 from "../../../../assets/images/star-icon-2.png"

function FrontSingle() {
  return (
    <MainContainer>
      <BackgroundContainer>
        <Header>
          <div>
            <TitleJob>React Front End Jr.</TitleJob>
            <City>Sao Paulo - Brasil</City>
          </div>
          <div>
            <img
              style={{ width: "30px", height: "30px", borderRadius: "20px" }}
              src={jobLogo}
              alt="Job Logo"
            />
          </div>
        </Header>
        <SalaryAndRatingContainer>
          <div>R$ 4.000/mês</div>
          <RatingContainer>
            <img
              src={starIcon2}
              style={{ width: "20px", height: "20px", borderRadius: "20px" }}
              alt="Star Icon"
            />
            <div>4.5</div>
          </RatingContainer>
        </SalaryAndRatingContainer>
      </BackgroundContainer>
      <JobDescription>
        <div>
          <JobTitleDescription>Descrição da vaga</JobTitleDescription>
        </div>
        <div>
          <div style ={{lineHeight: 1.7}}>
            Estamos em busca de um talentoso Desenvolvedor Front - End Júnior para se juntar à nossa equipe inovadora. Se você é apaixonado por criar experiências de usuário envolventes, possui habilidades sólidas em tecnologias web modernas e está ansioso para crescer profissionalmente, esta oportunidade é para você!
          </div>
        </div>
        <div>
          <RequirementTopic>Requisitos</RequirementTopic>
        </div>
        <div>
          <div style={{ paddingBottom: "20px" }}>
            <ul>
              <li style={{lineHeight:1.7}}>Conhecimento sólido em HTML, CSS e JavaScript.</li>
              <li style={{lineHeight:1.7}}>Familiaridade com frameworks Front-End, como ReactJS.</li>
              <li style={{lineHeight:1.7}}>Boa compreensão de design responsivo e experiência do usuário.</li>
              <li style={{lineHeight:1.7}}>Capacidade de trabalhar em equipe e comunicar efetivamente.</li>
            </ul>
          </div>
        </div>
        <div>
          <SingleRequirement>
            <SingleRequirementIcon src={check} alt="Check Icon" />
            <div style={{lineHeight:1.7}}>2 ou + de experiência</div>
          </SingleRequirement>
          <SingleRequirement>
            <SingleRequirementIcon src={check} alt="Check Icon" />
            <div style={{lineHeight:1.7}}>Formação em Ciência da Computação, Sistemas para internet, Analise e Desenvolvimento de Sistemas ou afins</div>
          </SingleRequirement>
          <SingleRequirement>
            <SingleRequirementIcon src={check} alt="Check Icon" />
            <div style={{lineHeight:1.7}}>Experiência em Java, SQL e Spring</div>
          </SingleRequirement>
          <SingleRequirement>
            <SingleRequirementIcon src={check} alt="Check Icon" />
            <div style={{lineHeight:1.7}}>Disponibilidade de atuação híbrida 2x por semana.</div>
          </SingleRequirement>
        </div>
        <BtnContainer>
          <ApplyJobBtn color="#390072" text="Aplicar" />
          <ApplyJobBtn color="#000" text="Salvar vaga" />
        </BtnContainer>
      </JobDescription>
    </MainContainer>
  )
}

export default FrontSingle