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
            <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
            <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
            <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
            <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
        </StyledDialogsItems>
        <StyledMessages>
            <Message message={messages[0].text}/>
            <Message message={messages[1].text}/>
            <Message message={messages[2].text}/>
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