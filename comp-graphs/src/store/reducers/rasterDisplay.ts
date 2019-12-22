import {
    SetRasterDisplayRows,
    SetRasterDisplayRowsAction
} from '../actions/SetRasterDisplayRows';
import {
    SetRasterDisplayCols,
    SetRasterDisplayColsAction
} from '../actions/SetRasterDisplayCols';
import Action from './Action';
import Raster from '../../types/Raster';
import raster from '../../utility/raster';

interface State {
    rows: number,
    cols: number,
    display: Raster
}

const defaultRasterDisplayRows = 16;

const defaultRasterDisplayCols = 32;

const defaultRasterDisplay = raster(defaultRasterDisplayRows, defaultRasterDisplayCols);

const defaultState: State = {
    rows: defaultRasterDisplayRows,
    cols: defaultRasterDisplayCols,
    display: defaultRasterDisplay
};

function rasterDisplay(
    state: State = defaultState,
    action: Action | SetRasterDisplayRowsAction | SetRasterDisplayColsAction
): State {
    switch(action.type) {
        case SetRasterDisplayRows: {
            const { cols } = state;
            const { rows } = (action as SetRasterDisplayRowsAction).payload;
            return {
                rows,
                cols,
                display: raster(rows, cols)
            };
        }
        case SetRasterDisplayCols: {
            const { rows } = state;
            const { cols } = (action as SetRasterDisplayColsAction).payload;
            return {
                rows,
                cols,
                display: raster(rows, cols)
            };
        }
        default: return state;
    }
}

export default rasterDisplay;