import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const ImagesContainerScrollView = styled.ScrollView``;

export const ImageView = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: #4d6f80;
  font-family: 'Nunito_700Bold';
  font-size: 30px;
`;

export const Description = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  border: 1px;
  border-color: #b3dae2;
  margin-top: 40px;
  background: #e6f7fb;
  overflow: hidden;
`;

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesContainerText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Separator = styled.View`
  height: 0.8;
  width: 100%;
  background: #d3e2e6;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const OpeningHours = styled.View`
  width: 48%;
  padding: 20px;

  background: #e6f7fb;
  border: 1px;
  border-color: #b3dae2;
  border-radius: 20px;
`;

export const OpeningHoursText = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #5c8599;
`;

export const OpenOnWeekends = styled.View`
  width: 48%;
  padding: 20px;

  background: #edfff6;
  border: 1px;
  border-color: #a1e9c5;
  border-radius: 20px;
`;

export const OpenOnWeekendsText = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #37c77f;
`;

export const ContactButton = styled(RectButton)`
  background: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;

export const OpenOnWeekendsDontOpen = styled.View`
  width: 48%;
  padding: 20px;

  background: #fef6f9;
  border: 1px;
  border-color: #ff669d;
  border-radius: 20px;
`;

export const OpenOnWeekendsDontOpenText = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #ff669d;
`;
