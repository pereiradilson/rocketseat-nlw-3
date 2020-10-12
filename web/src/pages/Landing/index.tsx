import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { 
  Container, 
  ContentWrapper, 
  Logo, 
  Main,
  MainTitle,
  MainDescription,
  Location,
  LocationCity,
  LocationState,
  EnterApp,
} from './styles';

import logoImg from '../../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Logo src={logoImg} alt="Happy - Leve felicidade para o mundo." />

        <Main>
          <MainTitle>Leve felicidade para o mundo</MainTitle>
          <MainDescription>
          Visite orfanatos e mude o dia de muitas crianças.
          </MainDescription>
        </Main>

        <Location>
          <LocationCity>Criciúma</LocationCity>
          <LocationState>Santa Catarina</LocationState>
        </Location>

        <EnterApp as={Link} to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
}

export default Landing;