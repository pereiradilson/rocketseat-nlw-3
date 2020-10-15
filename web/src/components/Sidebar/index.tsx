import React from 'react';
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from '../../images/map-marker.svg';

import { 
  Container,
  Aside, 
  AsideImage,
  AsideFooter,
  AsideButton, 
} from './styles';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Aside>
        <AsideImage src={mapMarkerImg} alt="Happy" />

        <AsideFooter>
          <AsideButton onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </AsideButton>
        </AsideFooter>
      </Aside>
    </Container>
  );
}

export default Sidebar;