import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;
  h2 {
    font-weight: 400;
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 8rem;
  text-align: center;
  font-size: 1.7rem;
  color: #e4584f;

  @media (max-width: 992px) {
        width: 100%;
        font-size: 2rem;
        text-align: center;
    }

    @media (max-width: 576px) {
      & h2{
         font-size: 1.6rem;
      }
    }
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
`;


export const NovTittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    font-size: 2rem;
    color: #e4584f;
    padding: 40px 0px 10px 0px;
    animation: fade 1s ease-in, slide-up 1.3s ease-in-out;

    @media (max-width: 992px) {
        width: 100%;
        font-size: 1.8rem;
        text-align: center;
        
        & p {
          font-size: 1.6rem;
        }
    }

    @media (max-width: 576px) {
      & h2 {
          font-size: 2rem;
        }
    }
`;

export const NewsletterWrapper = styled.section`
      padding-top: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;

`

export const NewsletterTittles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    h2 {
        text-align: center;
        font-size: 1.5rem;
        color: #e4584f;
    }
    h3 {
        text-align: center;
        font-size: 1.3rem;
        color: #e4584f;
    }

    @media (max-width: 992px) {
        width: 100%;
        font-size: 1.8rem;
    }
`


