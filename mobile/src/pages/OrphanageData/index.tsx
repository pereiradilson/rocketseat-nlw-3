import React, { useCallback, useRef, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import {
  Container,
  Title,
  Label,
  ImagesInput,
  SwitchContainer,
  SwitchContainerSwitch,
  NextButton,
  NextButtonText,
} from './styles';

interface IOrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  };
}

interface IOrphanageFormData {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  whatsapp: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

const OrphanageData: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const route = useRoute();
  const params = route.params as IOrphanageDataRouteParams;

  const [open_on_weekends, setOpenOnWeekends] = useState(true);

  const handleSubmit = useCallback(
    (data: IOrphanageFormData) => {
      const { latitude, longitude } = params.position;

      console.log({
        ...data,
        latitude,
        longitude,
        open_on_weekends,
      });
    },
    [open_on_weekends],
  );

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Label>Nome</Label>
        <Input name="name" style={{ textAlignVertical: 'top' }} />

        <Label>Sobre</Label>
        <Input
          name="about"
          style={{ textAlignVertical: 'top', height: 110 }}
          multiline
        />

        <Label>WhatsApp</Label>
        <InputMask
          type="cel-phone"
          name="whatsapp"
          style={{ textAlignVertical: 'top' }}
        />

        <Label>Fotos</Label>
        <ImagesInput onPress={() => {}}>
          <Feather name="plus" size={24} color="#15B6D6" />
        </ImagesInput>

        <Title>Visitação</Title>

        <Label>Instruções</Label>
        <Input
          name="instructions"
          style={{ textAlignVertical: 'top', height: 110 }}
          multiline
        />

        <Label>Horario de visitas</Label>
        <Input name="opening_hours" style={{ textAlignVertical: 'top' }} />

        <SwitchContainer>
          <Label>Atende final de semana?</Label>
          <SwitchContainerSwitch
            thumbColor="#fff"
            trackColor={{ false: '#ccc', true: '#39CC83' }}
            value={open_on_weekends}
            onValueChange={setOpenOnWeekends}
          />
        </SwitchContainer>

        <NextButton onPress={() => formRef.current?.submitForm()}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      </Form>
    </Container>
  );
};

export default OrphanageData;
