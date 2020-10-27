import classes from "../Dialogs.module.css";
import React from "react";
import MyMessage from "./MyMessage/MyMessage";
import Post from "../../Profile/MyPosts/Post/Post";

const Message = (props) => {
    return (
        <div>
            <div className={classes.message}>
                {props.message}
            </div>

        </div>
    )
}
export default Message;

