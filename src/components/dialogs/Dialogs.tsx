import styled from "styled-components";
import {Message} from "./message/Message";
import {DialogItem} from "./dialogItem/DialogItem";

export type MsgPropsType = {
    id: string;
    text: string;
}

export type DialogProps = {
    id: string;
    name: string
}

export type DialogsPropsType = {
    dialogsState: {
        dialogs: DialogProps[];
        messages: MsgPropsType[]
    }
}
export const Dialogs = (props: DialogsPropsType) => {

    return <StyledDialogs>
        <StyledDialogsItems>
            {props.dialogsState.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)}
        </StyledDialogsItems>
        <StyledMessages>
            {props.dialogsState.messages.map(m => <Message message={m.text}/>)}
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