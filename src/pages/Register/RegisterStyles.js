import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form as FormikForm } from 'formik';


export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 125px;
  background-color: #2b3438ad;

  & h1 {
    @media (max-width: 992px) {
      text-align: center; 
    }
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  width: 80%;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: #e4584f;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;

