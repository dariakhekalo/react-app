import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;