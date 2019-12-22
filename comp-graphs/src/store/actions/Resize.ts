import ScreenSize from '../../types/ScreenSize';

export const Resize = 'resize';

export interface ResizeAction {
    type: typeof Resize,
    payload: ScreenSize
};

export function resize(size: ScreenSize): ResizeAction {
    return { type: Resize, payload: size };
};

export default resize;