import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navbar/NavBar";
import {Profile} from "./components/profile/Profile";
import styled from "styled-components";
import {WrapperContent} from "./components/wrapper/WrapperContent";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <StyledWrapper>
                <Header/>
                <NavBar/>
                <WrapperContent>
                    <Routes>
                        <Route path='dialogs' element={<Dialogs/>}/>
                        <Route path='profile' element={<Profile/>}/>
                    </Routes>
                </WrapperContent>
            </StyledWrapper>
        </BrowserRouter>
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