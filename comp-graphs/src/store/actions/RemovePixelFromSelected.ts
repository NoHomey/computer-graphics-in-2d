import Pixel from '../../types/Pixel';

export const RemovePixelFromSelected = 'remove-pixel-from-selected';

export interface RemovePixelFromSelectedAction {
    type: typeof RemovePixelFromSelected,
    payload: Pixel
};

export function removePixelFromSelected(pixel: Pixel): RemovePixelFromSelectedAction {
    return {
        type: RemovePixelFromSelected,
        payload: pixel
    };
};

export default removePixelFromSelected;