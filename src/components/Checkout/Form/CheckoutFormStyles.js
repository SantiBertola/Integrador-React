import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 100px auto;

  & h2 {
    text-align: center;
    color: #e4584f;
  }

`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`