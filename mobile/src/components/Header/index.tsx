import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Title, Button, Empty } from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel }) => {
  const navigation = useNavigation();

  const handleNavigateToHomePage = useCallback(() => {
    navigation.navigate('OrphanagesMap');
  }, []);

  return (
    <Container>
      <Button onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </Button>

      <Title>{title}</Title>

      {showCancel ? (
        <Button onPress={handleNavigateToHomePage}>
          <Feather name="x" size={24} color="#8FA7B3" />
        </Button>
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default Header;
