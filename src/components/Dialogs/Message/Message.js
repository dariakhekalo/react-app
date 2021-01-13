import classes from "../Dialogs.module.css";
import React from "react";

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

