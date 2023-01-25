import React from "react";
import styled from 'styled-components';


const LogoHeading = styled.h4`
font-size: 3.5rem;
color:#38625b;
display: flex;
justify-content: center;
align-items: center;
margin-right:20px;
padding:0;

  @media (min-width: 550px) {
    font-size: 6rem;
    margin: 20px;
  }
  @media (min-width: 850px) {
  
    font-size: 11rem;
    padding: 48px;
    margin-left:80px;
  }
`

const AcademyText = () => {
  

    return(
        <LogoHeading>
            <div>
               PreslaVSysteM
            </div>
          
        </LogoHeading>
       
    );
}

export default AcademyText;