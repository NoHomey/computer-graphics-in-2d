import Pixel from '../../types/Pixel';
import Color from '../../types/Color';

export const SetPixelColor = 'set-pixel-color';

export interface SetPixelColorAction {
    type: typeof SetPixelColor,
    payload: {
        pixel: Pixel,
        color: Color
    }
};

const setPixelColor: (pixel: Pixel) => (color: Color) => SetPixelColorAction
= pixel => color => ({
    type: SetPixelColor,
    payload: { pixel, color }
});

export const setBackgroundColor = setPixelColor(Pixel.Background);

export const setFillColor = setPixelColor(Pixel.Fill);

export const setContourColor = setPixelColor(Pixel.Contour);