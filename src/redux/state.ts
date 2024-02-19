import {v1} from "uuid";

export type ProfilePageType = {
    msgForNewPost: string;
    posts: PostType[];
}

export type PostType = {
    id: string;
    message: string;
    icon: string;
    likes: number
}

export type MsgType = {
    id?: string;
    text: string;
}
export type DialogType = {
    id: string;
    name: string
}

export type MessagesPageType = {
    dialogs: DialogType[];
    messages: MsgType[];
}

export type RootStateType = {
    profilePage: ProfilePageType;
    messagesPage: MessagesPageType;
}

const iconSrc = "https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png"
//
// export let state: RootStateType = {
//     profilePage: {
//         msgForNewPost: "",
//         posts: [{id: "1", message: "post-1", icon: iconSrc, likes: 22},
//             {id: "2", message: "post-2", icon: iconSrc, likes: 2},
//             {id: "3", message: "post-3", icon: iconSrc, likes: 66}]
//     },
//     messagesPage: {
//         dialogs: [
//             {id: "1", name: "Friend1"},
//             {id: "2", name: "Friend2"},
//             {id: "3", name: "Friend3"},
//             {id: "4", name: "Friend4"},
//             {id: "5", name: "Friend5"}
//         ],
//         messages: [
//             {id: "1", text: "msg1"},
//             {id: "2", text: "msg2"},
//             {id: "3", text: "msg3"},
//         ]
//     }
// }
//
// export let addPost = () => {
//     const newPost = {id: v1(), message: state.profilePage.msgForNewPost, icon: iconSrc, likes: 0};
//     state.profilePage.posts.push(newPost);
//     rerenderTree(state);
// }
//
// export let changeNewText = (newText: string) => {
//     state.profilePage.msgForNewPost = newText;
//     rerenderTree(state);
// }
//
// export const subscribe = (observer: (state: RootStateType) => void) => {
//     rerenderTree = observer;
// }

export type StoreType = {
    _state: RootStateType;
    addPost: () => void;
    changeNewText: (newText: string) => void;
    rerenderTree: () => void;
    subscribe: (observer: () => void) => void;
    getState: () => RootStateType;
}

const store: StoreType = {
    _state: {
        profilePage: {
            msgForNewPost: "",
            posts: [{id: "1", message: "post-1", icon: iconSrc, likes: 22},
                {id: "2", message: "post-2", icon: iconSrc, likes: 2},
                {id: "3", message: "post-3", icon: iconSrc, likes: 66}]
        },
        messagesPage: {
            dialogs: [
                {id: "1", name: "Friend1"},
                {id: "2", name: "Friend2"},
                {id: "3", name: "Friend3"},
                {id: "4", name: "Friend4"},
                {id: "5", name: "Friend5"}
            ],
            messages: [
                {id: "1", text: "msg1"},
                {id: "2", text: "msg2"},
                {id: "3", text: "msg3"},
            ]
        }
    },
    addPost() {
        debugger
        const newPost = {
            id: v1(),
            message: this._state.profilePage.msgForNewPost,
            icon: iconSrc,
            likes: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.msgForNewPost = "";
        this.rerenderTree();
    },
    changeNewText(newText: string) {
        debugger
        this._state.profilePage.msgForNewPost = newText;
        this.rerenderTree();
    },
    rerenderTree() {
    },
    subscribe (observer) {
        this.rerenderTree = observer;
    },
    getState () {
        return this._state;
    }
}

export default store;