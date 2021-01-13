import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ?<div> {props.login} - <button onClick={props.logout}>Logout</button></div>
              :  <NavLink to={"/login"}> Login</NavLink> }
            </div>
        </header>
    )
}

export default Header

