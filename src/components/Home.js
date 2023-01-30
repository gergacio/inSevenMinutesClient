import React from "react";
import styled from 'styled-components';
import AcademyTextLogo from "./AcademyTextLogo";
import AcademySmallTextLogo from "./AcademySmallTextLogo";


const Box = styled.div`

background-color: #bcbbb9;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height 100vh;
`


const Home = () => (
  <Box>
       <AcademySmallTextLogo />    
        <AcademyTextLogo /> 
       
  </Box>
);

export default Home;
