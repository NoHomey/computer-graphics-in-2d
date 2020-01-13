import PixelKind from '../../types/PixelKind';
import Color from '../../types/Color';

export const SetPixelColor = 'set-pixel-color';

export interface SetPixelColorAction {
    type: typeof SetPixelColor,
    payload: {
        pixelKind: PixelKind,
        color: Color
    }
};

const setPixelColor: (pixelKind: PixelKind) => (color: Color) => SetPixelColorAction
= pixel => color => ({
    type: SetPixelColor,
    payload: { pixelKind: pixel, color }
});

export const setBackgroundColor = setPixelColor(PixelKind.Background);

export const setFillColor = setPixelColor(PixelKind.Fill);

export const setContourColor = setPixelColor(PixelKind.Contour);

export const setContrastColor = setPixelColor(PixelKind.Contrast);