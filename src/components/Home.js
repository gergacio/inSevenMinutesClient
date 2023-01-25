import React from "react";
import styled from 'styled-components';
import AcademyTextLogo from "./AcademyTextLogo";
import AcademySmallTextLogo from "./AcademySmallTextLogo";


const Box = styled.div`
margin-top:100px;
min-height: 100vh;
width: 100vw;
background-color: #bcbbb9;
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 550px) {
  flex-direction:row; 
}
@media (min-width: 850px) {

  flex-direction:column; 
}
`


const Home = () => (
  <Box>
     
       <AcademySmallTextLogo /> 
       <AcademyTextLogo /> 
  </Box>
);

export default Home;
