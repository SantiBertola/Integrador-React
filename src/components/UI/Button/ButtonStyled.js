import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: 2px solid black;
  border-radius: 10px;
  background: #e4584f;
  color: black;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    border: 2px solid #e4584f;
    color: #e4584f;
    background-color: #2b3438 ;
    opacity: 95%;
    transition: 0.5s all ease-in;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;