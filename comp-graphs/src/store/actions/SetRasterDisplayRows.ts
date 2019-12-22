export const SetRasterDisplayRows = 'set-raster-display-rows';

export interface SetRasterDisplayRowsAction {
    type: typeof SetRasterDisplayRows,
    payload: {
        rows: number
    }
};

export function setRasterDisplayRows(rows: number): SetRasterDisplayRowsAction {
    return {
        type: SetRasterDisplayRows,
        payload: { rows }
    };
}

export default setRasterDisplayRows;