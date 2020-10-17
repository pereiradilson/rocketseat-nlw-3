import styled from 'styled-components/native';

import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 24px;
  background: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  color: #8fa7b3;
`;

export const Button = styled(BorderlessButton)``;

export const Empty = styled.View``;
