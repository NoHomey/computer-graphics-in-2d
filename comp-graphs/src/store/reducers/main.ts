import { combineReducers } from 'redux';
import pixelColor from './pixelColor';
import rasterDisplay from './rasterDisplay';
import screenSize from './screenSize';

const reducerMap = {
    pixelColor,
    rasterDisplay,
    screenSize
};

export const reducer = combineReducers(reducerMap);

export type State = ReturnType<typeof reducer>;

export default reducer;