import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;