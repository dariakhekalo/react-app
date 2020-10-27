import React from "react";
import classes from "./Friends.module.css"

const Friends = (props) => {


    return (
        <div className={classes.friends}>

            <div>
                <img src="https://cs16planet.ru/steam-avatars/images/avatar3219.jpg"/>
            </div>
            {props.name}

        </div>
    )
}
export default Friends;