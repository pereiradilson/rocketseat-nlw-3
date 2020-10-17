import React, { useCallback, useState } from 'react';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

import { Container, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleNextStep = useCallback(() => {
    navigation.navigate('OrphanageData', { position });
  }, [position]);

  const handleSelectMapPosition = useCallback(
    (event: MapEvent) => {
      setPosition(event.nativeEvent.coordinate);
    },
    [position],
  );

  return (
    <Container>
      <MapView
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
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
