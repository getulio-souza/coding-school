import React from "react";
import jobLogo from "../../../assets/images/job-logo.png";
import {
  BackgroundContainer,
  Header,
  Title,
  BackgroundCard,
  JobTitle,
  CompanyLocation,
  CompanyLocationInfo,
  ShowMoreBtn
} from "./vagasFront.styles";
import { Link } from "react-router-dom";

const VagasFront = ({ navigation }) => {
  // Sample data for demonstration
  const jobData = [{
      title: "React Front End Jr.",
      company: "Company X",
      location: "Sao Paulo, Brasil",
      address: "Av. Paulista, 122- Centro - São Paulo - SP"
    },
    {
      title: "Backend Developer",
      company: "Company Y",
      location: "Rio de Janeiro, Brasil",
      address: "Rua Copacabana, 45 - RJ"
    },
    {
      title: "FullStack Engineer",
      company: "Company Z",
      location: "Belo Horizonte, Brasil",
      address: "Avenida Savassi, 78 - MG"
    },
    {
      title: "Mobile App Developer",
      company: "App Solutions",
      location: "Florianópolis, Brasil",
      address: "Avenida Beira-Mar, 567 - SC"
    }, {
      title: "Data Scientist",
      company: "Data Insights",
      location: "Porto Alegre, Brasil",
      address: "Rua dos Andradas, 789 - RS"
    }, {
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Curitiba, Brasil",
      address: "Avenida Sete de Setembro, 456 - PR"
    }, {
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "Recife, Brasil",
      address: "Rua do Futuro, 101 - PE"
    },
    {
      title: "Software Engineer",
      company: "Tech Innovations",
      location: "Manaus, Brasil",
      address: "Rua Amazonas, 543 - AM"
    }, {
      title: "Quality Assurance Analyst",
      company: "Testing Experts",
      location: "Salvador, Brasil",
      address: "Praça Castro Alves, 321 - BA"
    }, {
      title: "Cybersecurity Specialist",
      company: "SecureNet",
      location: "Brasília, Brasil",
      address: "Esplanada dos Ministérios, Bloco C - DF"
    }, {
      title: "Mobile App Designer",
      company: "Creative Studios",
      location: "Natal, Brasil",
      address: "Ponta Negra, 789 - RN"
    }, {
      title: "Cloud Architect",
      company: "Cloud Solutions",
      location: "Porto Velho, Brasil",
      address: "Avenida Farquar, 1010 - RO"
    },
    // Add more job data as needed
  ];
  

  return (
    <BackgroundContainer>
      {/* header */}
      <Header>
        <Title>Vagas Front-End</Title>
      </Header>
      {/* subtitle */}
      <div style={{ paddingBottom: 40, textAlign: 'center' }}>
        <p>Novas oportunidades todas as semanas </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 30 }}>
        {/* Render multiple job cards */}
        {jobData.map((job, index) => (
          <BackgroundCard key={index}>
            {/* jobinfo */}
            <div>
              <div style={{ flexDirection: "row", paddingBottom: 20, gap: 40 }}>
                <JobTitle>
                  <div>
                    <img
                      style={{ width: 30, height: 30, borderRadius: 30 }}
                      src={jobLogo}
                      alt="job-logo"
                    />
                  </div>
                  <div>
                    <strong style={{ fontWeight: '900' }}>{job.title}</strong>
                    <p style={{ color: '#A69E9E' }}>{job.company}</p>
                  </div>
                </JobTitle>
              </div>

              {/* company location */}
              <CompanyLocation>
                <CompanyLocationInfo>
                  <p style={{ color: '#fff' }}>{job.location}</p>
                  <p style={{ color: '#fff' }}>{job.address}</p>
                </CompanyLocationInfo>
              </CompanyLocation>
              {/* show more btn */}
              <Link to="/front-single-job">
                <ShowMoreBtn>Mostrar mais</ShowMoreBtn>
              </Link>
            </div>
          </BackgroundCard>
        ))}
      </div>
    </BackgroundContainer>
  );
};

export default VagasFront;
