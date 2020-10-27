import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "../Dialogs/Dialogs";
import AllFriends from "./AllFriends";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        names: state.friendsName.names
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(AllFriends);
export default NavbarContainer;