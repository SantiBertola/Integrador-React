import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 5rem;

  @media (max-width: 992px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 1rem 3rem 1rem;
    
  }
`;