import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const MapContainer = styled.div`
  border: 1px solid #d3e2e5;
  border-radius: 20px;
`;

export const CreateOrphanageForm = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;
`;

export const FormFieldset = styled.fieldset`
  border: 0;

  & + fieldset {
    margin-top: 80px;
  }
`;

export const FormLegend = styled.legend`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: #5c8599;
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 20px;
  padding-bottom: 24px;
`;

export const InputBlock = styled.div`
  margin-top: 24px;

  & + div {
    margin-top: 24px;
  }

  > label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    > span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  > input {
    display: none;
  }
`;

export const NewImage = styled.label`
  width: 100%;
  height: 96px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;

    &.active {
      background: #edfff6;
      border: 1px solid #a1e9c5;
      color: #37c77f;
    }

    &:first-child {
      border-radius: 20px 0px 0px 20px;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  > svg {
    margin-right: 16px;
  }

  &:hover {
    background: #36cf82;
  }

  &:focus {
    outline: none;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 96px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Errors = styled.div`
  color: #ff669d;

  background: linear-gradient(154.16deg, #fcf0f4 7.85%, #ffffff 91.03%);
  border: 1px solid #ffbcd4;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 20px;

  > ul {
    list-style-type: none;
  }
`;
