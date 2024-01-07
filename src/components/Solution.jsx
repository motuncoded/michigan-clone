import React from "react";
import CardImage from "../assets/people-business.jpg";
import ImageCard from "../assets/law.jpg";
import ImgCard from "../assets/growth.jpg";
import Card from "./Card";

const StyledLayout = styled.div`
  background-color: var(--light-blue);
`;

const StyledContainer = styled.div`
  --max-width: 1110px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
  min-height: 100vh;
  background-color: var(--light-blue);
`;
const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
`;
const StyledHeader = styled.h2`
  font-size: 2rem;
`;
const StyledParagraph = styled.p`
  padding: 0.5rem 0;
  max-width: 92ch;
  text-align: center;
`;
const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 2rem;
`;

const Solution = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledHero>
          <StyledHeader>Our Solutions</StyledHeader>
          <StyledParagraph>
            We help you streamline and automate your systems and processes with
            marks that drives decisions. Get data-driven attribution reporting
            and a 300-degree view of your prospect and customers layers
            journeys.
          </StyledParagraph>
        </StyledHero>
        <StyledCard>
          <Card
            image={CardImage}
            header="Marketing Professional"
            paragraph="Marketing helps to traffic corners more visitors and run comprise inbound market campaign at scale. "
          />
          <Card
            image={ImageCard}
            header="Sales Professional"
            paragraph="Marketing helps to traffic corners more visitors and run comprise inbound market campaign at scale."
          />
          <Card
            image={ImgCard}
            header="Growth Websites"
            paragraph="Marketing helps to traffic corners more visitors and run comprise inbound market campaign at scale."
          />
        </StyledCard>
      </StyledContainer>
    </StyledLayout>
  );
};
export default Solution;
