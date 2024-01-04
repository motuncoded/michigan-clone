import React from 'react'
import styled from "styled-components";
import AboutImage from "../assets/people-business.jpg";


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
  height: 100vh;
  `
const StyledLeft = styled.div`
  width: 40px;
    position:absolute;
    background-color:var(--white);
    top: 0;
    left:-8%;
    bottom: 0;
opacity:.85;
 `
  const StyledHeroList = styled.div`
  display:inline-block;
  position:absolute;
  width: 500px;
  height: 300px;
  background-color: var(--white);
  padding: 1rem 1rem 1rem 0rem;
left: 50%;

`
const StyledTitle= styled.div`
   display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column; 
`
const StyledHeader = styled.h2`
  font-size:.85rem;
  color:var(--red);
  position:relative;
  padding: 1rem;
  padding-left:4rem;
  text-transform:uppercase;

&:before{
  content:"";
  width:50px;
  height: 3px;
  background-color:var(--red);
  left: 0%;
  top: 47%;
  position:absolute;
  
  
}

`

const StyledHeading = styled.h3`
  font-size: 1.7rem;
  line-height: 1.1;
    padding: .5rem 0;

`
const StyledParagraph = styled.p`
  font-size: .8rem;
  padding: .5rem 0;
  line-height:1.2;
  max-width:64ch;
`
const StyledButton = styled.button`
  width: 150px;
  background-color: var(--red);
  border-radius: 5px;
  border: 2px solid var(--red);
  color: var(--white);
  padding: 0.5rem 0.5rem;
  margin:1rem 0;

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
            
            <img src={AboutImage} className="about-image" alt="Michigan-staff" />
          <StyledHeroList>
            <StyledLeft></StyledLeft>
            <StyledTitle>
            <StyledHeader> Who we are
            </StyledHeader>
          <StyledHeading>
              Modern marketing, sales and customer service solutions.

            </StyledHeading>
          <StyledParagraph>
           We help you streamline and automate your systems and processes with marks that drives decisions get data-driven attribution reporting and a 300-degree view of your prospect and customers layers journeys.
          </StyledParagraph>
              <StyledButton>Talk to an advisor</StyledButton>
              </StyledTitle>
        </StyledHeroList>
        </StyledHero>
       

      </StyledContainer>
    </StyledLayout>
      
  )
};

export default About;