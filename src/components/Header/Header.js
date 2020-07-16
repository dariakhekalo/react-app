import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className= {classes.header}>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
            </div>
        </header>
    )
}

export default Header

