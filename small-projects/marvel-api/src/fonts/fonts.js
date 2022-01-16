import { createGlobalStyle } from 'styled-components';
import Decalotype from './Decalotype-Regular.otf';
import DecalotypeBlack from './Decalotype-Black.otf';
import DecalotypeLight from './Decalotype-Light.otf';
import DecalotypeSemiBold from './Decalotype-SemiBold.otf';


export default createGlobalStyle`
  @font-face {
    font-family: 'DecalotypeBlack';
    font-weight: normal;
    font-style: normal;
    src: url(${DecalotypeBlack}); 
  }
  @font-face {
    font-family: 'Decalotype';
    font-weight: normal;
    font-style: normal;
    src: url(${Decalotype});
  }
  @font-face {
    font-family: 'DecalotypeLight';
    font-weight: normal;
    font-style: normal;
    src: url(${DecalotypeLight});
  }  
  
  @font-face {
    font-family: 'DecalotypeSemiBold';
    font-weight: normal;
    font-style: normal;
    src: url(${DecalotypeSemiBold});
  }
`;




