export const SetPointerWidth = 'set-pointer-width';

export interface SetPointerWidthAction {
    type: typeof SetPointerWidth,
    payload: { pointerWidth: number }
};

export function setPointerWidth(pointerWidth: number): SetPointerWidthAction {
    return {
        type: SetPointerWidth,
        payload: { pointerWidth }
    };
};

export default setPointerWidth;