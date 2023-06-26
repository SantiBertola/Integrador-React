import styled from 'styled-components';

export const FoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  height: 50vh;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 100px;

    & h1 {
      font-size: 2rem;
    }

    & h2 {
      font-size: 1rem;
    }
  }
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #e4584f;
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
  color: #e4584f;
`;

export const FoundSubtitleStyled = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  font-weight: 400;
  color: #e4584f;
`;