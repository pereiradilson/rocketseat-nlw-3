import React, { useCallback, useRef, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import api from '../../services/api';

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
  UploadedImagesContainer,
  UploadedImage,
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
  images: string[];
}

const OrphanageData: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const route = useRoute();
  const params = route.params as IOrphanageDataRouteParams;

  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = useCallback(
    async (data: IOrphanageFormData) => {
      try {
        const { latitude, longitude } = params.position;

        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('latitude', String(latitude));
        formData.append('longitude', String(longitude));
        formData.append('about', data.about);
        formData.append('whatsapp', data.whatsapp);
        formData.append('instructions', data.instructions);
        formData.append('opening_hours', data.opening_hours);
        formData.append('open_on_weekends', String(open_on_weekends));

        images.forEach((image, index) => {
          formData.append('images', {
            name: `image_${index}.jpg`,
            type: 'image/jpg',
            uri: image,
          } as any);
        });

        await api.post('orphanages', formData);

        Alert.alert('Cadastro realizado!');

        navigation.navigate('OrphanagesMap');
      } catch (err) {
        console.log(err);
      }
    },
    [open_on_weekends, images, navigation],
  );

  const handleSelectImages = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Precisamos de acesso a suas fotos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri } = result;

    setImages([...images, uri]);
  }, [images]);

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

        <UploadedImagesContainer
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {images.map(image => (
            <UploadedImage key={image} source={{ uri: image }} />
          ))}
        </UploadedImagesContainer>

        <ImagesInput onPress={handleSelectImages}>
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
