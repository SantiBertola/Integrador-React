import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: #2b3438;
  width: 450px;
  top: 120px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    color: #e4584f;
  }

  @media (max-width: 576px){ 
    width: 100%;
  }

`;

export const LinkStyled = styled(Link)`
 color: #e4584f;
  &:hover {
    text-decoration: underline;
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
  color: #e4584f;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #e4584f;
  margin: 1rem 0;
`


export const ModalUserOverlayStyled = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
z-index: 50;
width: 100vw;
height: 100vh;
cursor: pointer;

${({ isHidden }) =>
  !isHidden &&
  css`
    backdrop-filter: blur(4px);
  `}
`; 