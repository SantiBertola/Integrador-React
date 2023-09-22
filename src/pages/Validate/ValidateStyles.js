import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ValidateContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 200px;

  & h1,
  h2 {
    color: #e4584f;

    @media (max-width: 576px) {
      text-align: center;
    }
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  gap: 20px;
`;
