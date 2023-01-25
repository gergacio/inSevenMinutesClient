import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar";


const LogoHeading = styled.h4`
font-size: 1.4rem;
color:white;
font-weight:100;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding:0;

  @media (min-width: 550px) {
    font-size: 2rem;
  }
  @media (min-width: 850px) {
  
    font-size: 3rem;
 
  }
`

const AcademySmallText = () => {
  

    return(
        <LogoHeading>
            simplifying complexity
        </LogoHeading>
       
    );
}

export default AcademySmallText;