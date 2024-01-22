import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navbar/NavBar";
import {Profile} from "./components/profile/Profile";
import styled from "styled-components";
import {WrapperContent} from "./components/wrapper/WrapperContent";
import {DialogProps, Dialogs, DialogsPropsType, MsgPropsType} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {MyPostsPropsType, PostType} from "./components/profile/myPosts/MyPosts";

type AppPropsType = {
    appState: {
        profilePage: {
            posts: PostType[];
        },
        messagesPage: {
            dialogs: DialogProps[];
            messages: MsgPropsType[]
        }
    }
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <StyledWrapper>
                <Header/>
                <NavBar/>
                <WrapperContent>
                    <Routes>
                        <Route path='dialogs/*' element={<Dialogs dialogsState={props.appState.messagesPage}/>}/>
                        <Route path='profile' element={<Profile profileState={props.appState.profilePage}/>}/>
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