import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  margin-top: 150px;

  & h2 {
    color: #cc564f;
  }
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: #cc564f;

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  background: red;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    background: green;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Divider = styled.hr`
  border: .5px solid #e45f67;
  margin: 4rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #e45f67;
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  text-decoration: underline;
`;
