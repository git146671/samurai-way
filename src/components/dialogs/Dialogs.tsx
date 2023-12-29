import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return <StyledDialogs>
        <StyledDialogsItems>
            <div>
                <NavLink to='/dialogs/1'>Friend1</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs/2'>Friend2</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs/3'>Friend3</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs/4'>Friend4</NavLink>
            </div>
        </StyledDialogsItems>
        <StyledMessages>
            <div>msg1</div>
            <div>msg2</div>
            <div>msg3</div>
        </StyledMessages>
    </StyledDialogs>
}

const StyledDialogs = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
    `

const StyledDialogsItems = styled.div`
    padding: 10px;
    a {
        color: darkred;
        text-decoration: none;
    }
    a.active {
        color: orangered;
    }
    `

const StyledMessages = styled.div`
    padding: 10px;
    `