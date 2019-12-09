import React from 'react';
import Grid from '@material-ui/core/Grid';
import Raster from '../types/Raster';
import PixelMap from '../types/PixelMap';

interface Props {
    raster: Raster,
    pixelMap: PixelMap
};

const RasterDisplay: React.FC<Props> = ({raster, pixelMap}) => (
    <Grid container direction='column' justify='center'>
    {
        raster.map((row, rowIndex) => (
            <Grid item container direction='row' justify='center' key={rowIndex}>
            {
                row.map((pixel, colIndex) => (
                    <Grid
                        item
                        style={pixelMap[pixel]}
                        key={(rowIndex + 1) * (colIndex + 1)} />
                ))
            }
            </Grid>           
        ))
    }
    </Grid>
);

export default RasterDisplay;