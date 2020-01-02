import { createSelector } from 'reselect';
import { State } from '../reducers/main';

const pixelHeight = createSelector(
    (state: State) => state.rasterConfig.screenSize.height,
    (state: State) => state.rasterConfig.rasterDisplay.rows,
    (height: number, rows: number) => Math.floor((height - 61) / rows)
);

export default pixelHeight;