import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background: #ebf2f5;
  }

  body, input, button, textarea {
    font: 600 18px 'Nunito', sans-serif;
  }

  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center; 
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
