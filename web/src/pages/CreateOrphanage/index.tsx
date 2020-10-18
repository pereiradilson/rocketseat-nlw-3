import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Main,
  CreateOrphanageForm,
  FormFieldset,
  FormLegend,
  InputBlock,
  ImagesContainer,
  NewImage,
  ButtonSelect,
  ConfirmButton,
  MapContainer,
  PreviewImage,
  Errors,
} from './styles';

import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import mapIcon from '../../utils/mapIcon';
import { FaSleigh } from 'react-icons/fa';
import InputMask from '../../components/InputMask';

interface ICreateOrphanageFormData {
  name: string;
  about: string;
  whatsapp: string;
  instructions: string;
  opening_hours: string;
}

const CreateOrphanage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [open_on_weekends, setOpenOnWeekEnds] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    setPosition({ latitude: lat, longitude: lng });
  }, []);

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const selectedImages = Array.from(event.target.files);

      setImages(selectedImages);

      const selectedImagesPreview = selectedImages.map(image => {
        return URL.createObjectURL(image);
      });

      setPreviewImages(selectedImagesPreview);
    },
    [images],
  );

  const handleSubmit = useCallback(
    async (data: ICreateOrphanageFormData) => {
      try {
        const { latitude, longitude } = position;

        formRef.current?.setErrors({});

        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('latitude', String(latitude));
        formData.append('longitude', String(longitude));
        formData.append('about', data.about);
        formData.append('whatsapp', data.whatsapp);
        formData.append('instructions', data.instructions);
        formData.append('opening_hours', data.opening_hours);
        formData.append('open_on_weekends', String(open_on_weekends));

        images.forEach(image => {
          formData.append('images', image);
        });

        const schema = Yup.object().shape({
          latitude: Yup.number().notOneOf([0], 'Selecione um ponto no mapa.'),
          name: Yup.string().required('O campo nome é obrigatório.'),
          about: Yup.string().required('O campo sobre é obrigatório.').max(300),
          whatsapp: Yup.string()
            .required('O campo whatsapp é obrigatório.')
            .min(14, 'O campo whatsapp deve conter 14 caracteres.'),
          images: Yup.array().required('O campo fotos é obrigatório.'),
          instructions: Yup.string().required(
            'O campo instruções é obrigatório.',
          ),
          opening_hours: Yup.string().required(
            'O campo horário de visitas é obrigatório.',
          ),
        });

        await schema.validate(
          {
            latitude,
            images,
            ...data,
          },
          {
            abortEarly: false,
          },
        );

        await api.post('orphanages', formData);

        alert('Orfanato cadastrado.');

        history.push('/app');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(err.errors);

          formRef.current?.setErrors(errors);

          window.scrollTo(0, 0);

          return;
        }
      }
    },
    [images, position, open_on_weekends],
  );

  return (
    <Container>
      <Sidebar />

      <Main>
        <CreateOrphanageForm as={Form} ref={formRef} onSubmit={handleSubmit}>
          <FormFieldset>
            <FormLegend>Dados</FormLegend>

            {errors.length !== 0 && (
              <Errors>
                <ul>
                  {errors.map(error => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </Errors>
            )}

            <MapContainer>
              <Map
                center={[-28.678866022295527, -49.369329214096076]}
                style={{
                  width: '100%',
                  height: 280,
                  borderRadius: 20,
                }}
                zoom={12}
                onclick={handleMapClick}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>
            </MapContainer>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <Input type="text" name="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <TextArea name="about" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="whatsapp">Número de WhatsApp</label>
              <InputMask
                name="whatsapp"
                mask="(99)99999-9999"
                maskChar={null}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map(image => {
                  return <PreviewImage key={image} src={image} alt="" />;
                })}

                <NewImage htmlFor="images[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImage>

                <input
                  type="file"
                  id="images[]"
                  multiple
                  onChange={handleSelectImages}
                />
              </ImagesContainer>
            </InputBlock>
          </FormFieldset>

          <FormFieldset>
            <FormLegend>Visitação</FormLegend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <TextArea name="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário das visitas</label>
              <Input name="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekEnds(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekEnds(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </InputBlock>
          </FormFieldset>

          <ConfirmButton>Confirmar</ConfirmButton>
        </CreateOrphanageForm>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
