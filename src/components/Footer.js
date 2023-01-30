import React from "react";
import styled from 'styled-components';
const Box = styled.div`
color: white;
background-color: #bcbbb9;
margin:0px;
padding:30px;

`

const Footer = () => (
  <Box>
    <p> <small>&copy; Copyright 2022, Georgi Georgiev</small></p>
  </Box>
);

export default Footer;