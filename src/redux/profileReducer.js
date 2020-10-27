const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, massage: 'Hi, how are you?', likesCount: 15},
        {id: 2, massage: 'It`s my first post', likesCount: 20}
    ],
    newPostText: "",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                massage: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };



        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewpostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;
