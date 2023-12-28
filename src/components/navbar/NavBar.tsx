import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return <StyledNav>
        <div>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news">News</NavLink>
        </div>
        <div>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </StyledNav>
}

const StyledNav = styled.nav`
    grid-area: n;
    background-color: #fff0c7;
    color: cornflowerblue;
    a {
        color: darkred;
        text-decoration: none;
    }
    a.active {
        color: orangered;
    }
`