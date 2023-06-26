import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  width: 100%;

  background-color: #2b3438;
  border: 1px solid #cc564f;
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1rem;

  width: 240px;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 1rem;
  color: #cc564f;
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #cc564f;
  font-size: 0.7rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 2rem;
  color: #cc564f;

`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const QuantityHandler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #e4584f;
    font-weight: 400;
    cursor: pointer;
    border: 0.3px solid #e4584f;
    font-size: 1rem;
    padding: 4px;

    :hover {
      background-color: #44505549;
    }

`