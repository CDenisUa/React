import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  min-height: 318px;
  background-color: #232222;
  cursor: pointer;
  transition: .3s;
  img {
    width: 200px;
    min-height: 200px;
  }
  h3 {
    padding-left: 15px;
    margin-top: 15px;
  }
  
  &:hover {
    filter: drop-shadow(0px 5px 20px #9F0013);
    transform: translateY(-5px);
  }
`