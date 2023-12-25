import styled from "styled-components";

export const Post = () => {
    return <StyledPost>
        <div>
            <img src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
            post1
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