import styled from "styled-components";

export const NavBar = () => {
    return <StyledNav>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </StyledNav>
}

const StyledNav = styled.nav`
    grid-area: n;
    background-color: #fff0c7;
`