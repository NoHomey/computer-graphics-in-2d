import { createSelector } from 'reselect';
import { State } from '../reducers/main';

const pixelWidth = createSelector(
    (state: State) => state.rasterConfig.screenSize.width,
    (state: State) => state.rasterConfig.rasterDisplay.cols,
    (width: number, cols: number) => Math.floor(width / cols)
);

export default pixelWidth;