import styled from "styled-components";


export const FooterContainerStyled = styled.footer`

    margin-top: 5vh;
    margin-bottom: 3vh;
`

export const FooterLinks = styled.div`
      display: flex;
      justify-content: space-around;
      gap: 15px;

  & h4 {
    color: #cc564f;
    font-size: 22px;
    padding: 1rem 0;
  }
  
  & a {
    color: #9d5351;
    font-size: 18px;
  }

  & a:hover {
    color: #b55450;
    text-decoration: underline;
  }

  @media (max-width: 992px) {
      flex-direction: column;
        text-align: center;
        width: 100%;
  }

`

