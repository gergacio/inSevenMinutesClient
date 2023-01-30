import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";

const Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
@media (max-width: 550px) {
  zoom: 0.75;
-moz-transform: scale(0.75);
-moz-transform-origin: 0 0;
-o-transform: scale(0.75);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.75);
-webkit-transform-origin: 0 0; 
}
@media (max-width: 850px) {
  zoom: 0.85;
-moz-transform: scale(0.85);
-moz-transform-origin: 0 0;
-o-transform: scale(0.85);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.85);
-webkit-transform-origin: 0 0; 
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box>
       <App />
       
    </Box>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
