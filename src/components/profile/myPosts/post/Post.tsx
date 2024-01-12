import styled from "styled-components";

type PostPropsType = {
    message: string;
    src: string;
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return <StyledPost>
        <div>
            <img src={props.src}/>
            {props.message}
            <span>  Likes: {props.likesCount}</span>
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