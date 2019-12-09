import Color from '../types/Color';
import PixelStyle from '../types/PixelStyle';

function pixelStyle(color: Color, width: number, height: number): PixelStyle {
    return {
        backgroundColor: color,
        minWidth: width,
        minHeight: height,
        border: '1px solid white'
    };
}

export default pixelStyle;