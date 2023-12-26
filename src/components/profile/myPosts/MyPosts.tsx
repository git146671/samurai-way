import styled from "styled-components";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return <StyledPosts>
        <div>
            My posts
            <textarea></textarea>
            <button>Add</button>
            <button>Remove</button>
            <Post message='post-1' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
            <Post message='post-2' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
            <Post message='post-3' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>

        </div>
    </StyledPosts>
}

const StyledPosts = styled.div`
    background-color: #b9aaff;
`