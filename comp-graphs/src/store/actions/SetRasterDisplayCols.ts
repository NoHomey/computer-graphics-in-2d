export const SetRasterDisplayCols = 'set-raster-display-cols';

export interface SetRasterDisplayColsAction {
    type: typeof SetRasterDisplayCols,
    payload: {
        cols: number
    }
};

export function setRasterDisplayCols(cols: number): SetRasterDisplayColsAction {
    return {
        type: SetRasterDisplayCols,
        payload: { cols }
    };
}

export default setRasterDisplayCols;