import styled from 'styled-components';


export const CongratulationsStyled = styled.div`
  margin-top: 150px;
`


export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(80vh - 100px);
  margin-bottom: 100px;
`;

export const TitleStyled = styled.h1`
  color: #cc564f;
  font-size: 2.5rem ;
  text-align: center;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;
  margin: 5rem 0;

  & p {
    color: #cc564f;
    font-size: 2rem ;
    margin-bottom: 50px;
  }
  


  @media (max-width: 576px) {
    img {
    width: 50%;
    height: 50%;
  }
  } 
`;
