import React, { useCallback } from 'react';
import { Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  FooterButton,
} from './styles';

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToOrphanageDetails = useCallback(() => {
    navigation.navigate('OrphanageDetails');
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
        <Marker
          icon={mapMarkerImg}
          coordinate={{
            latitude: -28.678866022295527,
            longitude: -49.369329214096076,
          }}
          calloutAnchor={{
            x: 0.7,
            y: 0,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <CalloutContainer>
              <CalloutText>Lar dos meninos</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>

      <Footer style={{ elevation: 3 }}>
        <FooterText>2 orfanatos encontrados</FooterText>
        <FooterButton onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF" />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
