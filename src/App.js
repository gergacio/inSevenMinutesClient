import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
//import components
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import styled from "styled-components";
import BookingContainer from "./containers/BookingContainer";
import LearnerContainer from "./containers/LearnerContainer";
import CourseContainer from "./containers/CourseContainer";
import LessonContainer from "./containers/LessonContainer";
import LessonForm from "./components/lessons/LessonForm";


//display parent as flex
const StyledRouter = styled.div`
display: flex;
flex-direction: column;
`
function App() {
  //render router with all routes(components)
  return (
    <Router>
      <StyledRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/lessons" element={< LessonContainer />} />
          <Route path="/courses" element={< CourseContainer />} />
          <Route path="/bookings" element={< BookingContainer />} />
          <Route path="/learners" element={< LearnerContainer />} />
          <Route path="/about" element={< About />} />
          <Route path="/createl" element={< LessonForm />} />
          <Route path="*" element={< ErrorPage />}/>
        </ Routes>
        <Footer />
      </StyledRouter>
    </Router>
  );
}

export default App;
