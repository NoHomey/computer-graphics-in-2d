export const SetDashLength = 'set-dash-length';

export interface SetDashLengthAction {
    type: typeof SetDashLength,
    payload: { dashLength: number }
};

export function setDashLength(dashLength: number): SetDashLengthAction {
    return {
        type: SetDashLength,
        payload: { dashLength }
    };
};

export default setDashLength;