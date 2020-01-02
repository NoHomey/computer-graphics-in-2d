import Pixel from "../../types/Pixel";
import PixelKind from "../../types/PixelKind";

export const SetKindToPixel = 'set-kind-to-pixel';

export interface SetKindToPixelAction {
    type: typeof SetKindToPixel,
    payload: {
        pixel: Pixel,
        pixelKind: PixelKind
    } 
}

export function setKindToPixel(pixel: Pixel, pixelKind: PixelKind): SetKindToPixelAction {
    return {
        type: SetKindToPixel,
        payload: {
            pixel,
            pixelKind
        }
    };
};

export default setKindToPixel;