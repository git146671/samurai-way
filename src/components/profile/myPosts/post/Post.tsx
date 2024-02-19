import styled from "styled-components";
import {PostType} from "../../../../redux/state";

export const Post = (props: PostType) => {
    return <StyledPost>
        <div>
            <img src={props.icon}/>
            {props.message}
            <span>  Likes: {props.likes}</span>
        </div>
    </StyledPost>
}

const StyledPost = styled.div`
    background-color: #b9aaff;
    img {
        border-radius: 25px;
        width: 30px;
        height: 30px;
        background-color: #fff;
    }
`