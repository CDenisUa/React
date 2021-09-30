import styled from "styled-components";
import {SubTitle} from "../../../styles";

export const HeroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 433px;
  margin-bottom: 25px;
  padding: 25px 25px 0 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  height: fit-content;

  @media screen and (min-width: 1024px) {
    margin-left: 25px;
    z-index: 5;
  }
`;
export const HeroInfoHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  
  img{
    max-width: 150px;
    margin-right: 25px;
  }

  @media screen and (min-width: 520px) {
    flex-direction: row;
  }
`;
export const HeroInfoHeader = styled.div``;
export const ButtonWrap = styled.div`
  display: block;
  button:first-of-type {
    margin-right: 30px;
  }

  @media screen and (min-width: 520px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BlockTitle = styled(SubTitle)`
  display: block;
  text-transform: capitalize;
  font-size: 18px;
  margin: 10px 0;
`;
export const HeaderInfoFooter = styled(SubTitle)`
    margin: 0 0 20px 0;
    padding-bottom: 5px;
`;
export const BlockInfo = styled.div`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  font-size: 16px;
  font-family: 'DecalotypeLight',serif;
  padding: 5px 10px;
  text-transform: none;
`;

export const HeroInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;