import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";



let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, massage: 'Hi, how are you?', likesCount: 15},
                {id: 2, massage: 'It`s my first post', likesCount: 20}
            ],
            newPostText: "",


        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: "Dasha"},
                {id: 2, name: "Masha"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Valera"},
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your work"},
                {id: 3, message: "Yo"},

            ],
            newMessageText: "",
        },
        friendsName: {
            names: [
                {id: 1, name: "Dasha"},
                {id: 2, name: "Polina"},
                {id: 3, name: "Sveta"},
            ]
        }

    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;

    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.friendsName = friendsReducer(this._state.friendsName, action);
        this._callSubscriber(this._state);

    }

}




window.store = store;
export default store;