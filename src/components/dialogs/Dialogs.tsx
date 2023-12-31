import styled from "styled-components";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string;
    name: string;
}

type MessagePropsType = {
    message: string;
}

const DialogItem = (props:DialogItemPropsType) => {
    return <div>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props:MessagePropsType) => {
    return <div>{props.message}</div>
}

export const Dialogs = () => {
    return <StyledDialogs>
        <StyledDialogsItems>
            <DialogItem id='1' name='Friend1'/>
            <DialogItem id='2' name='Friend2'/>
            <DialogItem id='3' name='Friend3'/>
            <DialogItem id='4' name='Friend4'/>
        </StyledDialogsItems>
        <StyledMessages>
            <Message message='msg1'/>
            <Message message='msg2'/>
            <Message message='msg3'/>
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