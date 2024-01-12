import styled from "styled-components";
import {Post} from "./post/Post";

export const MyPosts = () => {
    const iconSrc = "https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png"

    let postsData = [
        {id: "1", message: "post-1", icon: iconSrc, likes: 22},
        {id: "2", message: "post-2", icon: iconSrc, likes: 2},
        {id: "3", message: "post-3", icon: iconSrc, likes: 66}
    ]
    return <StyledPostsBlock>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <button>Add</button>
        <button>Remove</button>
        <StyledPosts>
            <Post message={postsData[0].message} src={postsData[0].icon} likesCount={postsData[0].likes}/>
            <Post message={postsData[1].message} src={postsData[1].icon} likesCount={postsData[1].likes}/>
            <Post message={postsData[2].message} src={postsData[2].icon} likesCount={postsData[2].likes}/>
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