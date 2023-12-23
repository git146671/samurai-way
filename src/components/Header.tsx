import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <img width='50px' height='50px' src='https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png'/>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background-color: #9cf2ff;
    grid-area: h;
`