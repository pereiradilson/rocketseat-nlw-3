import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
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
  ContactButton,
} from './styles';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

interface OrphanageParams {
  id: string;
}

interface IImages {
  path: string;
}

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: IImages[];
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();

  const [orphanage, setOrphanage] = useState<IOrphanage>();
 
  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, []);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }
  
  return (
    <Container>
      <Sidebar />
    
      <Main>
        <OrphanageDetails>
          <OrphanageDetailsImage 
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <OrphanageDetailsImages>

            <OrphanageDetailsButton
              className="active"
            >
              <OrphanageDetailsButtonImage
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </OrphanageDetailsButton>

            <OrphanageDetailsButton>
              <OrphanageDetailsButtonImage
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </OrphanageDetailsButton>

            <OrphanageDetailsButton>
              <OrphanageDetailsButtonImage
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </OrphanageDetailsButton>

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
                zoom={13} 
                style={{ 
                  width: '100%', 
                  height: 280, 
                  borderRadius: 20 
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
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <MapContainerFooter>
                <MapContainerLink href="">
                  Ver rotas no Google Maps
                </MapContainerLink>
              </MapContainerFooter>
            </MapContainer>
          
            <OrphanageDetailsContentHr />

            <OrphanageDetailsContentInstructionTitle>
              Instruções para visita
            </OrphanageDetailsContentInstructionTitle>
            <OrphanageDetailsContentInstructionDescription>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </OrphanageDetailsContentInstructionDescription>

            <OpenDetails>
              <OpenDetailsHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </OpenDetailsHour>

              <OpenDetailsOnWeekends>
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </OpenDetailsOnWeekends>
            </OpenDetails>

            <ContactButton>
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
}

export default Orphanage;