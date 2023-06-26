import React from 'react';
import { StyledButton } from './ButtonStyled';

const Button = ({
  children,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;