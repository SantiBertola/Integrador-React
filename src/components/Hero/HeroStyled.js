import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    margin-top: 12.5vh;

    @media (max-width: 992px) {
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 30px;

        img {
            display: none;
        }
    }
`

export const HeroInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    & h2 {
        font-size: 4.5rem;
        color: #e4584f;
        padding: 5px;
    }

    & h4 {
        font-size: 2.5rem;
        color: #cc564f;
    }

    @media (max-width: 992px) {
        gap: 15px;

        & h2 {
        text-align: center;
        font-size: 3rem;
        color: #e4584f;

    }

        & h4 {
        text-align: center;
        font-size: 1.8rem;
        color: #cc564f;
    }
    }


`

export const HeroLinks = styled.div`
    display: flex;
    align-items: center;
    padding: 0.4rem;
    gap: 20px;
    
    @media (max-width: 992px) {
        padding-top: 15px;
        flex-direction: column;
    }
`

export const HeroSearchBarStyled = styled.input`
  background-color: #2b3438;
  border: 1px solid #e4584f;
  border-radius: 5px;
  padding: 0.7rem 3rem;
  color: white;

`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
`;