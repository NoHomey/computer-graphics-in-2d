import {
    SetRasterDisplayRows,
    SetRasterDisplayRowsAction
} from '../actions/SetRasterDisplayRows';
import {
    SetRasterDisplayCols,
    SetRasterDisplayColsAction
} from '../actions/SetRasterDisplayCols';
import {
    AddPixelToSelected,
    AddPixelToSelectedAction
} from '../actions/AddPixelToSelected';
import {
    RemovePixelFromSelected,
    RemovePixelFromSelectedAction
} from '../actions/RemovePixelFromSelected';
import { SetKindToPixel, SetKindToPixelAction } from '../actions/SetKindToPixel';
import { SetTask } from '../actions/SetTask';
import { ClearRasterDisplay } from '../actions/ClearRasterDisplay';
import Action from './Action';
import Raster from '../../types/Raster';
import raster from '../../utility/raster';
import Pixel from '../../types/Pixel';
import PixelKind from '../../types/PixelKind';

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
            return display({ rows, cols });
        }
        case SetRasterDisplayCols: {
            const { rows } = state;
            const { cols } = (action as SetRasterDisplayColsAction).payload;
            return display({ rows, cols });
        }
        case SetKindToPixel: {
            const { pixel, pixelKind } = (action as SetKindToPixelAction).payload;;
            return setKindToPixel(state, pixel, pixelKind);
        }
        case AddPixelToSelected: {
            const pixel = (action as AddPixelToSelectedAction).payload;
            return setKindToPixel(state, pixel, PixelKind.Contour);
        }
        case RemovePixelFromSelected: {
            const pixel = (action as RemovePixelFromSelectedAction).payload;
            return setKindToPixel(state, pixel, PixelKind.Background);
        }
        case SetTask: {
            const { rows, cols } = state;
            return display({ rows, cols });
        }
        case ClearRasterDisplay: {
            const { rows, cols } = state;
            return display({ rows, cols });
        }
        default: return state;
    }
}

function display({ rows, cols }: { rows: number, cols: number }): State {
    return {
        rows,
        cols,
        display: raster(rows, cols)
    };
}

function setKindToPixel(state: State, { x, y }: Pixel, pixelKind: PixelKind): State {
    return {
        ...state,
        display: state.display.setIn([y, x], pixelKind)
    };
}

export default rasterDisplay;