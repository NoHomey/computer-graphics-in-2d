import Raster from '../types/Raster';
import Pixel from '../types/Pixel';
import { List } from 'immutable';

function raster(rows: number, cols: number): Raster {
    return List(
        Array(rows).fill(Pixel.Background).map(_ =>
            List(Array(cols).fill(Pixel.Background))
        )
    );
}

export default raster;