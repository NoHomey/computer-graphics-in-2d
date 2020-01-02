import Pixel from '../../types/Pixel';

export const AddPixelToSelected = 'add-pixel-to-selected';

export interface AddPixelToSelectedAction {
    type: typeof AddPixelToSelected,
    payload: Pixel
};

export function addPixelToSelected(pixel: Pixel): AddPixelToSelectedAction {
    return {
        type: AddPixelToSelected,
        payload: pixel
    };
};

export default addPixelToSelected;