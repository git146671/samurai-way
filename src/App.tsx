import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navbar/NavBar";
import {Profile} from "./components/profile/Profile";
import styled from "styled-components";
import {WrapperContent} from "./components/wrapper/WrapperContent";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import store, {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType;
}
const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <StyledWrapper>
                <Header/>
                <NavBar/>
                <WrapperContent>
                    <Routes>
                        <Route path='dialogs/*' element={<Dialogs dialogs={state.messagesPage.dialogs}
                                                                  messages={state.messagesPage.messages}/>}/>
                        <Route path='profile'
                               element={<Profile profileState={state.profilePage}
                                                 dispatch = {store.dispatch.bind(props.store)}
                               />}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='settings' element={<Settings/>}/>
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
    padding: 7px;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-template-areas: 
        "h h"
        "n p";
`