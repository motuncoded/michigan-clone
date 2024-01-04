import React from "react";
import styled from "styled-components";
import logo from "../assets/michigan-logo.png";
import { FaBars, FaSearch } from "react-icons/fa";

const StyledLayout = styled.div`
background-color:var(--white);
position:fixed;
width: 100%;
overflow:hidden;
top:0;
  z-index:22;

`;
const StyledContainer = styled.div`
  --max-width: 1110px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
`;
const StyledNavbar = styled.div`

  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  height: 70px;
  background-color:transparent;

`;
const StyledHeader = styled.header``;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
const StyledList = styled.li`
  padding: 0 1rem;

  :hover {
    border-bottom: 2px solid var(--red);
  }
`;
const StyledLIink = styled.a``;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled.button`
  margin: 0 2rem;
  background-color: var(--white);
  color: var(--red);
  border-radius: 5px;
  border: 2px solid var(--red);
  padding: 0.5rem 0.5rem;

  &:hover {
    background-color: var(--red);
    color: var(--white);
    transition: all 200ms ease-in-out;
  }
  
`
const StyledMenu = styled.div`
  display: flex;
justify-content: center;
align-items:center;
display:none;
@media (max-width:50em){
  display:block;
}

`

const Navbar = () => {
  return (
        <StyledLayout>

    <StyledContainer>
      <StyledNavbar>
        <StyledHeader>
          <img src={logo} className="logo" alt="Michigan-logo" />
        </StyledHeader>
        
        <StyledNavList>
          <StyledList>
            <a href="#">Home</a>
          </StyledList>
          <StyledList>
            <a href="#">Process</a>
          </StyledList>
          <StyledList>
            <a href="#">Services</a>
          </StyledList>
          <StyledList>
            <a href="#">Pricing</a>
          </StyledList>
          <StyledList>
            <a href="#">Blog</a>
          </StyledList>
        </StyledNavList>
        <StyledIcon>
          <FaSearch />

          <StyledButton>Take a reservation</StyledButton>
        </StyledIcon>
        <StyledMenu>
          <FaBars/>
        </StyledMenu>
      </StyledNavbar>
      </StyledContainer>
      </StyledLayout>
  );
};

export default Navbar;
