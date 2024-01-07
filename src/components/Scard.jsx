import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1rem 0.5rem;
`;

const StyledIcon = styled.h2`
  margin: 1rem 0;
  font-size: 1.25rem;
  background-color: #eee;
  color: var(--red);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledHeader = styled.h3``;

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  padding: 0.75rem 0rem;
`;

const Scard = (props) => {
  return (
    <div>
      <StyledCard>
        <StyledIcon>{props.icon}</StyledIcon>
        <StyledHeader>{props.header}</StyledHeader>

        <StyledParagraph>{props.paragraph}</StyledParagraph>
      </StyledCard>
    </div>
  );
};

export default Scard;
