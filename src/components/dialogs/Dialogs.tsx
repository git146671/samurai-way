import styled from "styled-components";

export const Dialogs = () => {
    return <StyledDialogs>
        <StyledDialogsItems>
            <div>Friend1</div>
            <div>Friend2</div>
            <div>Friend3</div>
            <div>Friend4</div>
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
    `

const StyledMessages = styled.div`
    padding: 10px;
    `