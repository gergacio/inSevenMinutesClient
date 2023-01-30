import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar";


const LogoHeading = styled.h4`
font-size: 2rem;
color:white;
font-weight:100;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding:0;

`

const AcademySmallText = () => {
  

    return(
        <LogoHeading>
            simplifying complexity
        </LogoHeading>
       
    );
}

export default AcademySmallText;