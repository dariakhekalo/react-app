import {combineReducers, createStore} from "redux";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducers";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsName: friendsReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;