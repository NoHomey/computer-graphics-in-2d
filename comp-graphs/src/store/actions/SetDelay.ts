export const SetDelay = 'set-delay';

export interface SetDelayAction {
    type: typeof SetDelay,
    payload: { delay: number }
};

export function setDelay(delay: number): SetDelayAction {
    return {
        type: SetDelay,
        payload: { delay }
    };
};

export default setDelay;