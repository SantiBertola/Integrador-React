import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background-color: #2b3438ad;
    width: 40%;
    height: 40%;

    @media (max-width: 992px) {
        width: 100%;
        text-align: center;
    }

`

export const SelectInput = styled.select`
  background-color: #e4584f;
  border: ${({ isError }) => (isError ? '1px solid #ff3816; ' : '2px solid black')};
  border-radius: 8px;
  padding: 1rem 1rem;
  color: black;
  width: 30%;
  height: 50px;
  font-size: 14px;

  ::placeholder {
    font-size: 10px;
    color: black;
    opacity: 60%;
  }

  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px black inset;
  }

    ::placeholder {
        color: #cc564f;
    }
`

export const TextAreaInput = styled.textarea`

    background-color: #e4584f;
    border: ${({ isError }) => (isError ? '1px solid #ff3816; ' : '2px solid black')};
    border-radius: 8px;
    padding: 0.5rem  1rem;
    color: black;
    width: 50%;
    height: 50%;

  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px black inset;
}
`
