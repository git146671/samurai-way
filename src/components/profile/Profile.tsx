import styled from "styled-components";
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return <StyledProfile>
        <div>
            <img width='100%' src='https://cbgd.ask.fm/wallpapers2/015/033/372/928/original/newyork.jpg'/>
        </div>
        <div>
            Ava + descr
        </div>
        <MyPosts/>
    </StyledProfile>
}

const StyledProfile = styled.div`
    grid-area: p;
    background-color: #ffd3cc;
`