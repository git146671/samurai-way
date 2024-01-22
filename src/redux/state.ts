const iconSrc = "https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png"

export let state = {
    profilePage: {
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
}