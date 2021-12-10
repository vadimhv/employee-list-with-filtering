import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import './Navbar.css';
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar: React.FC = () => {

    return (
        <Stack direction="row" spacing={2} className={'navbar-wrapper'}>
            <Paper elevation={1}>
                <MenuList>
                    <NavbarItem link={'/'}>Employees List</NavbarItem>
                    <NavbarItem link={'/add-employees'}>Add employees</NavbarItem>
                </MenuList>
            </Paper>
        </Stack>
    );
};

export default Navbar;
