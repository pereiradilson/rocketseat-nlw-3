import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding: 16px;
  background: rgba(255, 255, 255, 1);
  border-radius: 16px;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CalloutText = styled.Text`
  font-family: 'Nunito_700Bold';
  font-weight: bold;

  color: #0089a5;
  font-size: 14px;
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background: #fff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-family: 'Nunito_700Bold';
  font-weight: bold;
  color: #8fa7b3;
`;

export const FooterButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background: #15c3d6;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
