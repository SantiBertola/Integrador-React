import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  background-color: #e4584f;
  border: ${({ isError }) => (isError ? '1px solid #ff3816; ' : '2px solid black')};
  border-radius: 8px;
  height: 35px;
  padding: 5px;
  color: black;
  width: 100%;

  ::placeholder {
    opacity: 60%;
    color: black;
    font-weight: 600;
  }
  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #e4584f inset;
  }

`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #ff3816;
  font-size: 14px;
`;
