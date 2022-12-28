import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navheader = () => {
  return (
    <div>
        <AppBar position="static" sx={{bgcolor:"#000000", borderRadius:'10px' , width:"60%", margin:'30px'}}>
                <Toolbar>
                <Button color="inherit" component={Link} to="/">User List</Button>
                <Button color="inherit" component={Link} to="/add-user">Add user</Button>
                </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navheader
