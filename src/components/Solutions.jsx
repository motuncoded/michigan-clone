import React from "react";
import styled from "styled-components";
import Scard from "./Scard";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineMiscellaneousServices, MdSell } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const StyledLayout = styled.div`
  background-color: var(--white);
`;

const StyledContainer = styled.div`
  --max-width: 1110px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
  min-height: 100vh;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
const StyledHeader = styled.h2`
  font-size: 0.85rem;
  color: var(--red);
  position: relative;
  padding: 1rem;
  padding-left: 4rem;
  text-transform: uppercase;

  &:before {
    content: "";
    width: 50px;
    height: 3px;
    background-color: var(--red);
    left: 0%;
    top: 47%;
    position: absolute;
  }
`;

const StyledHeading = styled.h3`
  font-size: 1.5rem;
  line-height: 1.1;
  max-width: 26ch;
`;
const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const Solutions = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledHeader> Our Solutions</StyledHeader>
          <StyledHeading>What does inbound services cover?</StyledHeading>
        </StyledHeaderContainer>
        <StyledCard>
          <Scard
            icon={<SiGooglemarketingplatform />}
            header="Marketing"
            paragraph="Poor result with marketing, not delivering quality work and clear acquisiton."
          />
          <Scard
            icon={<MdSell />}
            header="Sales"
            paragraph="Lack of structural process, struggle to respond to leave quickly missing saves good."
          />
          <Scard
            icon={<MdOutlineMiscellaneousServices />}
            header="Services "
            paragraph="Struggle to know up customer inquires quickly customer request failing through the cracks."
          />
          <Scard
            icon={<CgWebsite />}
            header="Website "
            paragraph="Website not performing nor attracting the user prospects and converting leads."
          />
        </StyledCard>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Solutions;
