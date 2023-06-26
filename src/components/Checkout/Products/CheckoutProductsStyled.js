import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  margin: 100px auto;
  width: 40%;

  @media (max-width: 992px) {
    margin-top: 150px;
    width: 80%;
  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  color: #e45f67;
  text-align: center;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  width: 100%;
  height: 500px;
  margin: 100px auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e4584f;
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #cc564f;
  gap: 3px;
  & p {
    text-align: center;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: #cc564f;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #e4584f;

`