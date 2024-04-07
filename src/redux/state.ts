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

export type UpdateNewPostTextAction = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type AddPostAction = {
    type: 'ADD-POST'
}

export type ActionTypes = UpdateNewPostTextAction | AddPostAction;

const iconSrc = "https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png"

export type StoreType = {
    _state: RootStateType;
    addPost: () => void;
    changeNewText: (newText: string) => void;
    _rerenderTree: () => void;
    subscribe: (observer: () => void) => void;
    getState: () => RootStateType;
    dispatch: (action: ActionTypes) => void;
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
        const newPost = {
            id: v1(),
            message: this._state.profilePage.msgForNewPost,
            icon: iconSrc,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.msgForNewPost = "";
        this._rerenderTree();
    },
    changeNewText(newText: string) {
        this._state.profilePage.msgForNewPost = newText;
        this._rerenderTree();
    },
    _rerenderTree() {
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action: ActionTypes) {
        switch (action.type) {
            case 'ADD-POST': {
                const newPost = {
                    id: v1(),
                    message: this._state.profilePage.msgForNewPost,
                    icon: iconSrc,
                    likes: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.msgForNewPost = "";
                this._rerenderTree();
                break;
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._state.profilePage.msgForNewPost = action.newText;
                this._rerenderTree();
                break;
            }
            default: {
                break;
            }
        }
    }
}

export default store;