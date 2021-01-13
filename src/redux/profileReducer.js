import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 1, massage: 'Hi, how are you?', likesCount: 15},
        {id: 2, massage: 'It`s my first post', likesCount: 20}
    ],
    newPostText: "",
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                massage: action.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };


        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile

            }
        }
        default:
            return state;
    }

}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const getUserProfile =(userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {

            dispatch(setUserProfile(response.data));

        })
}
export const getStatus =(userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {

            dispatch(setStatus(response.data));

        })
}
export const updateStatus =(status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(setStatus(status));
            }
        })
}
export default profileReducer;
