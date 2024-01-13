import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import App from "../../App";

interface PostType {
    id: string;
    message: string;
    icon: string;
    likes: number
}

type ProfilePropsType = {
    postsData: PostType[]
}
export const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>
    </div>
}