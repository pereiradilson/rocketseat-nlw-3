import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  Main,
  OrphanageDetails,
  OrphanageDetailsImage,
  OrphanageDetailsImages,
  OrphanageDetailsButton,
  OrphanageDetailsButtonImage,
  OrphanageDetailsContent,
  OrphanageDetailsContentTitle,
  OrphanageDetailsContentDescription,
  MapContainer,
  MapContainerFooter,
  MapContainerLink,
  OrphanageDetailsContentHr,
  OrphanageDetailsContentInstructionTitle,
  OrphanageDetailsContentInstructionDescription,
  OpenDetails,
  OpenDetailsHour,
  OpenDetailsOnWeekends,
  OpenDetailsOnWeekendsDontOpen,
  ContactButton,
} from './styles';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

interface OrphanageParams {
  id: string;
}

interface IImages {
  id: number;
  url: string;
}

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  whatsapp: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: IImages[];
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();

  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImageindex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  function handleActiveImage(index: number) {
    setActiveImageIndex(index);
  }

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <OrphanageDetails>
          <OrphanageDetailsImage
            src={orphanage.images[activeImageindex].url}
            alt={orphanage.name}
          />

          <OrphanageDetailsImages>
            {orphanage.images.map((image, index) => (
              <OrphanageDetailsButton
                key={image.id}
                className={activeImageindex === index ? 'active' : ''}
                onClick={() => handleActiveImage(index)}
              >
                <OrphanageDetailsButtonImage
                  src={image.url}
                  alt={orphanage.name}
                />
              </OrphanageDetailsButton>
            ))}
          </OrphanageDetailsImages>

          <OrphanageDetailsContent>
            <OrphanageDetailsContentTitle>
              {orphanage.name}
            </OrphanageDetailsContentTitle>
            <OrphanageDetailsContentDescription>
              {orphanage.about}
            </OrphanageDetailsContentDescription>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={15}
                style={{
                  width: '100%',
                  height: 280,
                  borderRadius: 20,
                }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <MapContainerFooter>
                <MapContainerLink
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </MapContainerLink>
              </MapContainerFooter>
            </MapContainer>

            <OrphanageDetailsContentHr />

            <OrphanageDetailsContentInstructionTitle>
              Instruções para visita
            </OrphanageDetailsContentInstructionTitle>
            <OrphanageDetailsContentInstructionDescription>
              {orphanage.instructions}
            </OrphanageDetailsContentInstructionDescription>

            <OpenDetails>
              <OpenDetailsHour>
                <FiClock size={32} color="#15B6D6" />
                Horário de visitas <br />
                {orphanage.opening_hours}
              </OpenDetailsHour>

              {orphanage.open_on_weekends ? (
                <OpenDetailsOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </OpenDetailsOnWeekends>
              ) : (
                <OpenDetailsOnWeekendsDontOpen>
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </OpenDetailsOnWeekendsDontOpen>
              )}
            </OpenDetails>

            <ContactButton
              href={`https://wa.me/${orphanage.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
