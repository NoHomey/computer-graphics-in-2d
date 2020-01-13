import Pixel from '../../types/Pixel';
import PixelKind from '../../types/PixelKind';

export const AddPixelToSelected = 'add-pixel-to-selected';

export interface AddPixelToSelectedAction {
    type: typeof AddPixelToSelected,
    payload: {
        pixel: Pixel,
        kind: PixelKind
    }
};

const defaultKind = PixelKind.Contour;

export function addPixelToSelected(pixel: Pixel, kind: PixelKind = defaultKind): AddPixelToSelectedAction {
    return {
        type: AddPixelToSelected,
        payload: {
            pixel,
            kind
        }
    };
};

export default addPixelToSelected;