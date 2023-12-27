import styled from "styled-components";

export const NavBar = () => {
    return <StyledNav>
        <div>
            <a href="/profile">Profile</a>
        </div>
        <div>
            <a href="/dialogs">Messages</a>
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
    color: cornflowerblue;
`