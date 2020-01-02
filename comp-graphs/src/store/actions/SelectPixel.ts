import Pixel from '../../types/Pixel';

export const SelectPixel = 'select-pixel';

export interface SelectPixelAction {
    type: typeof SelectPixel,
    payload: Pixel
}

export function selectPixel(pixel: Pixel): SelectPixelAction {
    return { type: SelectPixel, payload: pixel };
}

export default selectPixel;