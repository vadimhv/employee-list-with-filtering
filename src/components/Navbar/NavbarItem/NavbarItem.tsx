import React from 'react';
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import "../Navbar.css"

interface Props {
    link: string
}

const NavbarItem:React.FC<Props> = (props) => {

    const {link, children} = props;
    return (
        <MenuItem><NavLink to={link}>{children}</NavLink></MenuItem>
    );
};

export default NavbarItem;
