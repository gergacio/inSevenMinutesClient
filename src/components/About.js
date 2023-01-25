import React from "react";
import styled from 'styled-components';
import AboutLogo from "./AboutLogo";

const Box = styled.div`
margin-top:150px;
font-size: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 80vh;
@media (min-width: 550px) {
  font-size: 1.2rem;
  flex-direction: row;
}
@media (min-width: 850px) {

  font-size: 1.5rem;
  flex-direction: row;

}
`
const Div = styled.div`
color: #38625b;
padding: 20px;

`
const About = () => (
  <Box>
      <AboutLogo />
   
      <Div>
            <h2>PreslavSystem is a learning management system.</h2>
            <h4>Our mission is to providing practical education.</h4>
            <h4>We value quality.</h4>
      </Div>
  
  </Box>
);

export default About;