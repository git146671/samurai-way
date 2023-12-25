import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navbar/NavBar";
import {Profile} from "./components/profile/Profile";
import styled from "styled-components";


function App() {
    return (
        <StyledWrapper>
            <Header/>
            <NavBar/>
            <Profile/>
        </StyledWrapper>
    );
}

export default App;

const StyledWrapper = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-template-areas: 
        "h h"
        "n p";
`