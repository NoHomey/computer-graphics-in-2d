export const SetPointerHeight = 'set-pointer-height';

export interface SetPointerHeightAction {
    type: typeof SetPointerHeight,
    payload: { pointerHeight: number }
};

export function setPointerHeight(pointerHeight: number): SetPointerHeightAction {
    return {
        type: SetPointerHeight,
        payload: { pointerHeight }
    };
};

export default setPointerHeight;