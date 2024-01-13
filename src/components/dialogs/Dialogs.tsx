import styled from "styled-components";
import {Message} from "./message/Message";
import {DialogItem} from "./dialogItem/DialogItem";

export const Dialogs = () => {
    let dialogsData = [
        {id: "1", name: "Friend1"},
        {id: "2", name: "Friend2"},
        {id: "3", name: "Friend3"},
        {id: "4", name: "Friend4"}
    ]
    let messages = [
        {id: "1", text: "msg1"},
        {id: "2", text: "msg2"},
        {id: "3", text: "msg3"},
    ]
    return <StyledDialogs>
        <StyledDialogsItems>
            {dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)}
        </StyledDialogsItems>
        <StyledMessages>
            {messages.map(m => <Message message={m.text}/>)}
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