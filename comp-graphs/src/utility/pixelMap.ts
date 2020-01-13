import PixelKind from '../types/PixelKind';
import PixelMap from '../types/PixelMap';
import ColorMap from '../types/ColorMap';
import pixelStyle from './pixelStyle';

function pixelMap(colorMap: ColorMap, width: number, height: number): PixelMap {
    return {
        [PixelKind.Background]: pixelStyle(colorMap[PixelKind.Background], width, height),
        [PixelKind.Fill]: pixelStyle(colorMap[PixelKind.Fill], width, height),
        [PixelKind.Contour]: pixelStyle(colorMap[PixelKind.Contour], width, height),
        [PixelKind.Contrast]: pixelStyle(colorMap[PixelKind.Contrast], width, height)
    }
};

export default pixelMap;
