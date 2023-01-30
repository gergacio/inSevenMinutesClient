import React from "react";
import styled from 'styled-components';
const Box = styled.div`
color: white;
background-color: #bcbbb9;
display: flex;
flex-direction:column; 
justify-content: center;
align-items: center;
width: 100%;

`

const Footer = () => (
  <Box>
    <p> <small>&copy; Copyright 2022, Georgi Georgiev</small></p>
  </Box>
);

export default Footer;