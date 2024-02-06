import styled from "styled-components";
import {Post} from "./post/Post";
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";

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
    addPost: (newPostMsg: string) => void
}

export const MyPosts = (props:MyPostsPropsType) => {

    let [newPostMsg, setNewPostMsg] = useState<string>("");
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setNewPostMsg(e.currentTarget.value);
    }

    return <StyledPostsBlock>
        <h3>My posts</h3>
        <div>
            <textarea onChange={onChangeHandler}>{newPostMsg}</textarea>
        </div>
        <button onClick={() => props.addPost(newPostMsg)}>Add</button>
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