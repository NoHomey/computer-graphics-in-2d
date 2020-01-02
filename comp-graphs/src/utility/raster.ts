import Raster from '../types/Raster';
import PixelKind from '../types/PixelKind';
import { List } from 'immutable';

function raster(rows: number, cols: number): Raster {
    return List(
        Array(rows).fill(PixelKind.Background).map(_ =>
            List(Array(cols).fill(PixelKind.Background))
        )
    );
}

export default raster;