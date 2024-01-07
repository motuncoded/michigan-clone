import React from "react";
import styled from "styled-components";

const StyledCard = styled.div``;
const StyledGridCard = styled.div`
  background-color: var(--white);
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
`;
const StyledHeader = styled.h2`
  padding: 0.5rem 0;
  font-size: 1.5rem;
  text-transform: capitalize;
`;
const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  line-height: 1.2;
  padding: 0.5rem 0rem;
`;
const StyledButton = styled.button`
  margin: 0.75rem 0;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: var(--red);
`;
const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.image} className="card-image" alt="" />
      <StyledGridCard>
        <StyledHeader>{props.header}</StyledHeader>

        <StyledParagraph>{props.paragraph}</StyledParagraph>
        <StyledButton>Learn more &#8250;</StyledButton>
      </StyledGridCard>
    </StyledCard>
  );
};

export default Card;
