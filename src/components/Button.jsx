import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--red);
  border-radius: 5px;
  border: 2px solid var(--red);
  color: var(--white);
  padding: 0.15rem 0.5rem;

  &:hover {
    background-color: var(--white);
    color: var(--red);
    transition: all 200ms ease-in-out;
  }
`;

const Button = () => {
  return <StyledButton>{}</StyledButton>;
};

export default Button;
