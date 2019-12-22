import { createSelector } from 'reselect';
import { State } from '../reducers/main';
import createPixelMap from '../../utility/pixelMap';
import pixelWidth from './pixelWidth';
import pixelHeight from './pixelHeight';

const pixelMap = createSelector(
    (state: State) => state.pixelColor,
    pixelWidth,
    pixelHeight,
    createPixelMap
);

export default pixelMap;