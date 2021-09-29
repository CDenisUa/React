import styled from "styled-components";

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Query = styled.span`
  display: none;
  font-size: 24px;
  font-family: 'DecalotypeBlack', serif;
  
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'DecalotypeBlack', serif;
  font-size: 22px;
  span {
    color: #9F0013;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  
`;