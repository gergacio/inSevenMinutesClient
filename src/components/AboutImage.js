import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const image = require("../images/about.jpg");

const ItemImage = styled.img `
width: 70%;
height: auto;
`
const AboutImage = () => {
  

    return(
        <div>
             <Link><ItemImage src={image} alt="item"/></Link>          
        </div>
       
    );
}

export default AboutImage;