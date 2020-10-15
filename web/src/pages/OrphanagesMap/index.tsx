import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

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
  PopupLink,
} from './styles';

import mapMarkerImg from '../../images/map-marker.svg';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 6],
});

interface IOrphanages {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <Container>
      <Aside>
        <Header>
          <HeaderImg src={mapMarkerImg} alt="Happy" />

          <HeaderTitle>Escolha um orfanato no mapa</HeaderTitle>
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
        center={[-28.678866022295527, -49.369329214096076]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <PopupLink as={Link} to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </PopupLink>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateOrphanage as={Link} to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
