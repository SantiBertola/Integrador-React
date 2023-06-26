import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 500px);
  row-gap: 3.5rem;
  gap: 25px;
  width: 100%;
  padding: 1rem 0;
  margin-top: 7.5rem;
`;

export const ProductosCard = styled.div`
  background: #2b3438ad;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 1rem;
  img {
    width: 100%;
    height: 400px;
    margin-bottom: 1rem;
  }


  @media (max-width: 576px) {
    width: 70%;
    height: 100%;
  }

`;


export const CardTittles = styled.div`
    background: #2b3438ad;
    color: #cc564f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
    color: #cc564f;
    font-size: 1rem;
    padding-top: 5px;
    text-align: center;
  }

    @media (max-width: 576px) {
      text-align: center;
    }


`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background: #2b3438ad;
    color: rgba(0, 0, 0, 0.795);
    padding: 5px;
`







export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ShowMoreButton = styled.button`
        background-color: #e4584f;
        border: 2px solid black;
        border-radius: 7px;
        padding: 10px;
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
