import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { 
  Container,
  Aside,
  Header,
  HeaderImg, 
  HeaderTitle,
  HeaderDescription,
  Footer,
  FooterCity,
  FooterState,
  CreateOrphanage,
} from './styles';

import mapMakerImg from '../../images/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Header>
          <HeaderImg src={mapMakerImg} alt="Happy" />

          <HeaderTitle>
            Escolha um orfanato no mapa
          </HeaderTitle>
          <HeaderDescription>
            Muitas crianças estão esperando a sua visita :)
          </HeaderDescription>
        </Header>

        <Footer>
          <FooterCity>Criciúma</FooterCity>
          <FooterState>Santa Catarina</FooterState>
        </Footer>
      </Aside>

      <Map 
        center={[-28.6706196,-49.3853711]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanage as={Link} to="">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
}

export default OrphanagesMap;