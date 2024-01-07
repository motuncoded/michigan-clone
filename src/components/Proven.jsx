import React from "react";
import styled from "styled-components";
import ProvenImage from "../assets/collegues.jpg";

const StyledLayout = styled.div``;

const StyledContainer = styled.div`
  --max-width: 1110px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
  min-height: 100vh;
`;
const Proven = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledHero></StyledHero>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Proven;
