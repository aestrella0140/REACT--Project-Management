import * as React from 'react';
import { AppBar } from 'react-admin';
import { Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const CustomAppBar = (props) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/dashboard')
    };

    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' id="react-router-title"></Typography>
                <Button color="inherit" onClick={handleButtonClick}>dashboard</Button>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;