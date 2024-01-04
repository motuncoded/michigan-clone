import React from 'react'
import styled from "styled-components";
import CardImage from "../assets/people-business.jpg";
import Card from './Card';





const StyledLayout = styled.div`
  background-color: var(--light-blue);
`;

const StyledContainer = styled.div`
  --max-width: 1110px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
  background-color:var(--light-blue)
`
const StyledHero = styled.div`
   display: flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;

 
  `
const StyledHeader = styled.h2`
font-size:2rem;
  
    
  `
const StyledParagraph = styled.p`
padding:.5rem 0;
  max-width:92ch;
  text-align:center;

`
const StyledCard = styled.div`
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    gap:2rem;
    padding-top:2rem;
`

const Solution = () => {
  return (
    <StyledLayout>
      <StyledContainer>
                <StyledHero>
                  <StyledHeader>Our Solutions</StyledHeader>
                  <StyledParagraph>We help you streamline and automate your systems and processes with marks that drives decisions. Get data-driven attribution reporting and a 300-degree view of your prospect and customers layers journeys.</StyledParagraph>
              </StyledHero>
              <StyledCard>
          <Card image={CardImage} header="Marketing Professional" paragraph="Marketing helps to traffic corners more visitors and run comprise inbound market campaign at scale. " />
                            <Card image={CardImage}   header="Sales Professional" paragraph="Marketing helps to traffic corners more visitors and run comprise inbound market campaign at scale."/>
                  <Card image={CardImage}  header="Growth Websites" paragraph="Marketing helps to traffic corners more visitors and run comprise inbound market campaign at scale." />

              </StyledCard>
            </StyledContainer>
            </StyledLayout>
  )
}
export default Solution;
