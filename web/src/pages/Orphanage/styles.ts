import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;
`;

export const OrphanageDetailsImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const OrphanageDetailsImages = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`;

export const OrphanageDetailsButton = styled.button`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: 0.6;

  &.active {
    opacity: 1;
  }
`;

export const OrphanageDetailsButtonImage = styled.img`
  width: 100%;
  height: 88px;
  object-fit: cover;
`;

export const OrphanageDetailsContent = styled.div`
  padding: 80px;
`;

export const OrphanageDetailsContentTitle = styled.h1`
  color: #4d6f80;
  font-size: 54px;
  line-height: 54px;
  margin-bottom: 8px;
`;

export const OrphanageDetailsContentDescription = styled.p`
  line-height: 28px;
  color: #5c8599;
  margin-top: 24px;
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
`;

export const MapContainerFooter = styled.footer`
  padding: 20px 0;
  text-align: center;
`;

export const MapContainerLink = styled.a`
  line-height: 24px;
  color: #0089a5;
  text-decoration: none;
`;

export const OrphanageDetailsContentHr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background: #d3e2e6;
  margin: 64px 0;
`;

export const OrphanageDetailsContentInstructionTitle = styled.h2`
  font-size: 36px;
  line-height: 46px;
  color: #4d6f80;
`;

export const OrphanageDetailsContentInstructionDescription = styled.p`
  line-height: 28px;
  color: #5c8599;
  margin-top: 24px;
`;

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  > div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
  }
`;

export const OpenDetailsHour = styled.div`
  background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
  border: 1px solid #b3dae2;
  color: #5c8599;

  > svg {
    display: block;
    margin-bottom: 20px;
  }
`;

export const OpenDetailsOnWeekends = styled.div`
  background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
  border: 1px solid #a1e9c5;
  color: #37c77f;

  > svg {
    display: block;
    margin-bottom: 20px;
  }
`;

export const ContactButton = styled.button`
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
`;
