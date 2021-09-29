import styled from "styled-components";
import {Text} from "../../styles";

export const HeaderBlock = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  
    @media screen and (min-width: 1440px) {
      flex-direction: row;
    }
`;


export const HeroBlock = styled.div`
  display: grid;
  align-self: center;
  padding: 35px 40px;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: 180px 1fr;
    grid-template-rows: 180px;
    grid-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 50%;

  }
`;


export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 40px;
  background-color: #232222;
  position: relative;
  margin: 0;
  z-index: 0;
  overflow: hidden;
  
  p:first-of-type {
    margin-top: 0;
    margin-bottom: 30px;
  }

  p:last-of-type {
    margin-top: 0;
  }
  
  img {
    width: 100px;
    position: absolute;
    right: -20px;
    bottom: 10px;
  }
  
  button:after{
    border-top-color: #232222;
  }

  button:before{
    border-bottom-color: #232222;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 150px;
    }
  }


  @media screen and (min-width: 1440px) { 
    width: 50%;

    img {
      width: 200px;
    }
  }
`;

export const HeroDescription = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeroText = styled(Text)`
  margin-bottom: 13px;
`

export const ButtonWrap = styled.div`
  display: flex;
  button:first-child {
    margin-right: 30px;
  }
`;

export const HeroInfoText = styled.p`
  font-size: 24px;
  font-family: 'DecalotypeSemiBold', sans-serif;
  color: #fff;
`;