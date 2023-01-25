import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar";
import AcademyNavbarTextLogo from "./AcademyNavbarLogo";


const Box = styled.div`
color: #38625b;
background-color: #bcbbb9;
height: 120px;
display: flex;
flex-direction:column; 
justify-content: center;
align-items: end;
position:fixed;
top:0;
width: 100%;


`


const Header = () => {
    return(
         <Box> 
            <AcademyNavbarTextLogo />
        </Box>   
    );
}

export default Header;