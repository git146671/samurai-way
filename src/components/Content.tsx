import styled from "styled-components";

export const Content = () => {
    return <StyledContent>
        <div>
            <img width='1000px' src='https://cbgd.ask.fm/wallpapers2/015/033/372/928/original/newyork.jpg'/>
        </div>
        <div>
            Ava + descr
        </div>
        <div>
            My posts
            <div>post1</div>
            <div>post2</div>
        </div>
    </StyledContent>
}

const StyledContent = styled.div`
    grid-area: c;
    background-color: #ffd3cc;
`