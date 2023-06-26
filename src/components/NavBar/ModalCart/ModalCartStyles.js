import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 450px;
  height: calc(100vh - 4rem);

  padding: 2rem;
  background-color: #2b3438;
  border: 1px solid #cc564f;
  border-radius: 0 0 0 1rem;

  @media (max-width: 576px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }

`;

export const CloseButtonContainerStyled = styled.div`
  height: 20px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #cc564f;
  color: black;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;

  & h1 {
    margin-top: 0;
    color: #cc564f;
    font-weight: 600;
    font-size: 24px;
  }
`;

export const MainContainerStyled = styled.div`
  height: 75%;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 500px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 350px;

  background: #2323234e;
  border: 1px solid #b55450;
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  color: #cc564f;
  font-size: 1rem;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #cc564f;
  font-size: 0.65rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1rem;
  color: #cc564f;
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
  color: #cc564f;
  & p {
    text-align: center;
  }
`;

export const Button = styled.button`
        background-color: #e4584f;
        border: 2px solid black;
        color: black;
        font-weight: 500;
        border-radius: 20px;
        padding: 10px;
        width: 70%;
        margin-top: 5px;
        cursor: pointer;
        font-size: 16px;

    :hover {
        border: 2px solid #e4584f;
        color: #e4584f;
        background-color: #2b3438;
        transition: 0.3s all ease-in;
    }
`
export const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #e4584f;

`

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
  flex-direction: column;
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





