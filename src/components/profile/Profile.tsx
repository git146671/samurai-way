import {MyPosts, MyPostsPropsType} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = (props:MyPostsPropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profileState={props.profileState}/>
    </div>
}