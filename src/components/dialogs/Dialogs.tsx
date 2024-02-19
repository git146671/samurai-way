import styled from "styled-components";
import {Message} from "./message/Message";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessagesPageType} from "../../redux/state";

export const Dialogs = (props: MessagesPageType) => {

    return <StyledDialogs>
        <StyledDialogsItems>
            {props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)}
        </StyledDialogsItems>
        <StyledMessages>
            {props.messages.map(m => <Message text={m.text}/>)}
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