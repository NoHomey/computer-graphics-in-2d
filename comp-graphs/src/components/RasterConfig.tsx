import React from 'react';
import Grid from '@material-ui/core/Grid';
import BackgroundColor from './connected/BackgroudColor';
import FillColor from './connected/FillColor';
import ContourColor from './connected/ContourColor';
import RowsCount from './connected/RowsCount';
import ColsCount from './connected/ColsCount';
import ChangeConfig from './connected/ChangeConfig';

const RasterConfig: React.FC = () => (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
        <Grid item><BackgroundColor/></Grid>
        <Grid item><FillColor/></Grid>
        <Grid item><ContourColor/></Grid>
        <Grid item><RowsCount/></Grid>
        <Grid item><ColsCount/></Grid>
        <Grid item><ChangeConfig configRaster/></Grid>
    </Grid>
);

export default RasterConfig;