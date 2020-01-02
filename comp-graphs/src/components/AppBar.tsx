import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from './connected/Toolbar';

const AppBar: React.FC = () => (
    <MuiAppBar position='static' color='default'>
        <Toolbar />
    </MuiAppBar>
);

export default AppBar;