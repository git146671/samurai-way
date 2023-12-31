import styled from "styled-components";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return <StyledPostsBlock>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <button>Add</button>
        <button>Remove</button>
        <StyledPosts>
            <Post message='post-1' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
            <Post message='post-2' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
            <Post message='post-3' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
        </StyledPosts>
    </StyledPostsBlock>
}

const StyledPostsBlock = styled.div`
    background-color: #b9aaff;
    padding: 10px;
`

const StyledPosts = styled.div`
    margin-top: 10px;
`