import styled from "styled-components";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return <StyledPosts>
        <div>
            My posts
            <textarea></textarea>
            <button>Add</button>
            <button>Remove</button>
            <Post/>
            <Post/>
            <Post/>

        </div>
    </StyledPosts>
}

const StyledPosts = styled.div`
    background-color: #b9aaff;
`