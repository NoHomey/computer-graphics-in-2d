import Pixel from '../types/Pixel';
import PixelMap from '../types/PixelMap';
import ColorMap from '../types/ColorMap';
import pixelStyle from './pixelStyle';

function pixelMap(colorMap: ColorMap, width: number, height: number): PixelMap {
    return {
        [Pixel.Background]: pixelStyle(colorMap[Pixel.Background], width, height),
        [Pixel.Fill]: pixelStyle(colorMap[Pixel.Fill], width, height),
        [Pixel.Contour]: pixelStyle(colorMap[Pixel.Contour], width, height)
    }
};

export default pixelMap;
