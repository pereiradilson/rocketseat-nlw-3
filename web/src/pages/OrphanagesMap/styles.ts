import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header``;

export const HeaderImg = styled.img``;

export const HeaderTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const HeaderDescription = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const FooterCity = styled.strong`
  font-weight: 800;
`;

export const FooterState = styled.span``;

export const CreateOrphanage = styled.a`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10;

  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: #15c3d6;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #17e6eb;
  }
`;

export const PopupLink = styled.a`
  width: 40px;
  height: 40px;
  background: #15c3d6;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
