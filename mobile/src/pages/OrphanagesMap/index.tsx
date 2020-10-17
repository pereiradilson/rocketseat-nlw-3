import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  FooterButton,
} from './styles';

interface IOrphanages {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, [orphanages]);

  const handleNavigateToOrphanageDetails = useCallback((id: number) => {
    navigation.navigate('OrphanageDetails', { id });
  }, []);

  const handleNavigateToSelectMapPosition = useCallback(() => {
    navigation.navigate('SelectMapPosition');
  }, []);

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -28.678866022295527,
          longitude: -49.369329214096076,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarkerImg}
            coordinate={{
              latitude: Number(orphanage.latitude),
              longitude: Number(orphanage.longitude),
            }}
            calloutAnchor={{
              x: 0.7,
              y: 0,
            }}
          >
            <Callout
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
            >
              <CalloutContainer>
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Footer style={{ elevation: 3 }}>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>
        <FooterButton onPress={handleNavigateToSelectMapPosition}>
          <Feather name="plus" size={20} color="#FFF" />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
