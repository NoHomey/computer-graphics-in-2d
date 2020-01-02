import React from 'react';
import Grid from '@material-ui/core/Grid';
import Raster from '../types/Raster';
import PixelMap from '../types/PixelMap';
import Action from '../store/reducers/Action';
import selectPixel from '../store/actions/SelectPixel';

interface Props {
    raster: Raster,
    pixelMap: PixelMap,
    dispatch: (action: Action) => void
};

const RasterDisplay: React.FC<Props> = ({raster, pixelMap, dispatch}) => (
    <Grid container direction='column' justify='center'>
    {
        raster.map((row, rowIndex) => (
            <Grid item container direction='row' justify='center' key={rowIndex}>
            {
                row.map((pixel, colIndex) => (
                    <Grid
                        item
                        style={pixelMap[pixel]}
                        onClick={() => dispatch(selectPixel({ x: colIndex, y: rowIndex }))}
                        key={(rowIndex + 1) * (colIndex + 1)} />
                ))
            }
            </Grid>           
        ))
    }
    </Grid>
);

export default RasterDisplay;