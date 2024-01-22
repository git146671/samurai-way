import styled from "styled-components";
import {Post} from "./post/Post";

export interface PostType {
    id: string;
    message: string;
    icon: string;
    likes: number
}

export type MyPostsPropsType = {
    profileState: {
        posts: PostType[]
    }
}
export const MyPosts = (props:MyPostsPropsType) => {

    return <StyledPostsBlock>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <button>Add</button>
        <button>Remove</button>
        <StyledPosts>
            {props.profileState.posts.map(p => <Post message={p.message} src={p.icon} likesCount={p.likes}/>)}
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