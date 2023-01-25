import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const UL = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
list-style:none;
font-size: 1.1rem;
font-weight: bold;
flex-direction:row; 

@media (min-width: 550px) {
  font-size: 1.2rem;
 
}
@media (min-width:1200px) {
  font-size: 1.5rem;
}
`
const StyledLink = styled(Link)`
color: #38625b;
text-decoration: none;

font-family: "Open Sans";
&:hover,
&:focus{
    color: white;
}
&:active{
    color: red;
`
const LI = styled.li`

`

const NavBar = () => {
  return (
    

        
    <UL>
      <LI>
        <StyledLink to="/">Home</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/about">About</StyledLink>
      </LI> 
      <LI>
        <StyledLink to="/learners">Learners</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/bookings">Bookings</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/courses">Courses</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/lessons">Lessons</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/createl">Create</StyledLink>
      </LI>
   
    </UL>
  );
}

export default NavBar;