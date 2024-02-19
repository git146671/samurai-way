import {MsgType} from "../../../redux/state";

export const Message = (props: MsgType) => {
    return <div>{props.text}</div>
}