import React from "react";
import styled from 'styled-components';
import AcademyNavbarTextLogo from "./AcademyNavbarLogo";


const Box = styled.div`
color: #38625b;
background-color: #bcbbb9;
display: flex;
flex-direction:column; 
justify-content: center;
align-items: end;
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