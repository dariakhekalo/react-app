import profileReducer from "./profileReducer";
let initialState = {
    names: [
        {id: 1, name: "Dasha"},
        {id: 2, name: "Polina"},
        {id: 3, name: "Sveta"},
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state;
}
export  default friendsReducer;
