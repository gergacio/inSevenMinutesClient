import React from "react";
import styled from 'styled-components';


const LogoHeading = styled.h4`
font-size: 3rem;
color:#38625b;
display: flex;
justify-content: center;
align-items: center;
margin-right:20px;
padding:0;

`

const AcademyText = () => {
  

    return(
        <LogoHeading>
            <div>
               InSevenMinutes
            </div>
          
        </LogoHeading>
       
    );
}

export default AcademyText;