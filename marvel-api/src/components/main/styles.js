import styled from "styled-components";

export const MainSection = styled.main`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  
  @media screen and (min-width: 1250px) {
    flex-direction: row;
  }
`