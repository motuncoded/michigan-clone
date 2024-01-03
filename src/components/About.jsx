import React from 'react'
import styled from "styled-components";
import HeroImage from "../assets/happy-looking.png";


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
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding: 1rem;;
  height: 90vh;
  `
  const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;  
  width: 500px;
  background-color: var(--white);
  position:absolute;
  padding: 1rem;
left: 48%;

`
const StyledHeader = styled.h2`
  font-size:1rem;
  color:var(--red);
  padding-bottom:.5rem;
&:before{
}

`

const StyledHeading = styled.h3`
  font-size: 1.7rem;
  line-height: 1.1;
  padding-bottom: 0.25rem;
`
const StyledParagraph = styled.p`
  font-size: 1rem;
  padding: 1rem 0;
  line-height:1.5;
  max-width:62ch;
`
const StyledButton = styled.button`
  width: 150px;
  background-color: var(--red);
  border-radius: 5px;
  border: 2px solid var(--red);
  color: var(--white);
  padding: 0.5rem 0.5rem;

  &:hover {
    background-color: var(--white);
    color: var(--red);
    transition: all 200ms ease-in-out;
  }
`
const About = () => {


   
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledHero>
            <img src={HeroImage} className="about-image" alt="Michigan-staff" />
          <StyledHeroList>
            <StyledHeader> Who we are
            </StyledHeader>
          <StyledHeading>
              Modern marketing 

            </StyledHeading>
          <StyledParagraph>
            Leverage growth strategies and techologies to increase
            effectiveness, improve processes, lower costs, save time and report
            increase ROI from your growth efforts{" "}
          </StyledParagraph>
          <StyledButton>Talk to an advisor</StyledButton>
        </StyledHeroList>
        </StyledHero>
       

      </StyledContainer>
    </StyledLayout>
      
  )
};

export default About;