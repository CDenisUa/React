import styled from "styled-components";

export const CardsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 25px;
  align-self: center;


  @media screen and (min-width: 512px) {
    grid-template-columns: repeat(2,1fr);
    align-self: center;
  }
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3,1fr);
    align-self: center;
  }
`;

export const CardsSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`