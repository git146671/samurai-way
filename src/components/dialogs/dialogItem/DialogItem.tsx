import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

export const DialogItem = (props: DialogType) => {
    return <div>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}