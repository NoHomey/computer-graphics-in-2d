import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Pixel from './types/Pixel';
import Color from './types/Color';
import raster from './utility/raster';
import pixelStyle from './utility/pixelStyle';
import RasterDisplay from './components/RasterDisplay';
import AppBar from './components/AppBar';

const theme = createMuiTheme();

const rows = 16;
const cols = 30;
const pixelWidth = 60;
const pixelHeight = 60;

const pixelMap = {
    [Pixel.Background]: pixelStyle(Color.Green, pixelWidth, pixelHeight),
    [Pixel.Fill]: pixelStyle(Color.Blue, pixelWidth, pixelHeight),
    [Pixel.Contour]: pixelStyle(Color.Red, pixelWidth, pixelHeight)
};

const rasterDisplay = raster(rows, cols);

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{width: '100%', height: '100%'}}>
            <AppBar />
            <RasterDisplay raster={rasterDisplay} pixelMap={pixelMap} />
        </div> 
    </ThemeProvider>
);

export default App;
