import styled from "styled-components";
import {Post} from "./post/Post";
import React, {ChangeEvent} from "react";
import {ProfilePageType} from "../../../redux/state";

export type MyPostsPropsType = {
    profileState: ProfilePageType;
    addPost: () => void;
    changeNewPostText: (newPostMsg: string) => void;
}

export const MyPosts = (props:MyPostsPropsType) => {
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        props.changeNewPostText(e.currentTarget.value);
    }
    function onClickHandler() {
        props.addPost();
    }
    return <StyledPostsBlock>
        <h3>My posts</h3>
        <div>
            <textarea onChange={onChangeHandler} value={props.profileState.msgForNewPost}/>
        </div>
        <button onClick={onClickHandler}>Add</button>
        <button>Remove</button>
        <StyledPosts>
            {props.profileState.posts.map(p => <Post id={p.id} message={p.message} icon={p.icon} likes={p.likes}/>)}
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