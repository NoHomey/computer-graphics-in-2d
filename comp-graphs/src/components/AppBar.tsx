import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import BackgroundColor from './connected/BackgroudColor';
import FillColor from './connected/FillColor';
import ContourColor from './connected/ContourColor';
import RowsCount from './connected/RowsCount';
import ColsCount from './connected/ColsCount';

const AppBar: React.FC = () => (
    <MuiAppBar position='static' color='default'>
        <Toolbar>
            <Grid container direction='row' justify='space-evenly' alignItems='center'>
                <Grid item>
                    <BackgroundColor />
                </Grid>
                <Grid item>
                    <FillColor/>
                </Grid>
                <Grid item>
                    <ContourColor/>
                </Grid>
                <Grid item>
                    <RowsCount/>
                </Grid>
                <Grid item>
                    <ColsCount/>
                </Grid>
            </Grid>
        </Toolbar>
    </MuiAppBar>
);

export default AppBar;