import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ColorPicker from './ColorPicker';
import PixelCount from './PixelCount';

import Color from '../types/Color';

const AppBar: React.FC = () => (
    <MuiAppBar position='static' color='default'>
        <Toolbar>
            <Grid container direction='row' justify='space-evenly' alignItems='center'>
                <Grid item>
                    <ColorPicker
                        label='Backgroud color'
                        selected={Color.SteelBlue}
                        removeColor1={Color.Green}
                        removeColor2={Color.Blue}
                        onChange={v => console.log(v)}/>
                </Grid>
                <Grid item>
                    <ColorPicker
                        label='Fill color'
                        selected={Color.SteelBlue}
                        removeColor1={Color.Green}
                        removeColor2={Color.Blue}
                        onChange={v => console.log(v)}/>
                </Grid>
                <Grid item>
                    <ColorPicker
                        label='Cotour color'
                        selected={Color.SteelBlue}
                        removeColor1={Color.Green}
                        removeColor2={Color.Blue}
                        onChange={v => console.log(v)}/>
                </Grid>
                <Grid item>
                    <PixelCount
                        label='Rows'
                        value={16}
                        onChange={v => console.log(v)}/>
                </Grid>
                <Grid item>
                    <PixelCount
                        label='Columns'
                        value={30}
                        onChange={v => console.log(v)}/>
                </Grid>
            </Grid>
        </Toolbar>
    </MuiAppBar>
);

export default AppBar;