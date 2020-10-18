import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Linking,
  SafeAreaView,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import LottieView from 'lottie-react-native';

import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  ImagesContainer,
  ImagesContainerScrollView,
  ImageView,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  RoutesContainer,
  RoutesContainerText,
  Separator,
  ScheduleContainer,
  OpeningHours,
  OpeningHoursText,
  OpenOnWeekends,
  OpenOnWeekendsText,
  OpenOnWeekendsDontOpen,
  OpenOnWeekendsDontOpenText,
  ContactButton,
  ContactButtonText,
} from './styles';

interface IOrphanageDetailsRouteParams {
  id: number;
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

const OrphanageDetails: React.FC = () => {
  const route = useRoute();
  const params = route.params as IOrphanageDetailsRouteParams;

  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);

      setStatus(false);
    });
  }, [params.id]);

  const handleOpenGoogleMapsRoutes = useCallback(() => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`,
    );
  }, [orphanage]);

  const handleOpenWhatsApp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${orphanage?.whatsapp}`);
  }, [orphanage]);

  if (status) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#15C3D6" />
      </SafeAreaView>
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ImagesContainerScrollView horizontal pagingEnabled>
          {orphanage?.images.map(orphanageImage => (
            <ImageView
              key={orphanageImage.id}
              source={{
                uri: orphanageImage.url,
              }}
              style={{ resizeMode: 'cover' }}
            />
          ))}
        </ImagesContainerScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage?.name}</Title>
        <Description>{orphanage?.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: Number(orphanage?.latitude),
              longitude: Number(orphanage?.longitude),
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{
              width: Dimensions.get('window').width,
              height: 150,
            }}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: Number(orphanage?.latitude),
                longitude: Number(orphanage?.longitude),
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleOpenGoogleMapsRoutes}>
            <RoutesContainerText>Ver rotas no Google Maps</RoutesContainerText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage?.instructions}</Description>

        <ScheduleContainer>
          <OpeningHours>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <OpeningHoursText>
              Segunda à Sexta {orphanage?.opening_hours}
            </OpeningHoursText>
          </OpeningHours>

          {orphanage?.open_on_weekends ? (
            <OpenOnWeekends>
              <Feather name="info" size={40} color="#39CC83" />
              <OpenOnWeekendsText>Atendemos fim de semana</OpenOnWeekendsText>
            </OpenOnWeekends>
          ) : (
            <OpenOnWeekendsDontOpen>
              <Feather name="info" size={40} color="#FF669D" />
              <OpenOnWeekendsDontOpenText>
                Não atendemos fim de semana
              </OpenOnWeekendsDontOpenText>
            </OpenOnWeekendsDontOpen>
          )}
        </ScheduleContainer>

        <ContactButton onPress={handleOpenWhatsApp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
