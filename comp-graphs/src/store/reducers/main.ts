import { combineReducers } from 'redux';
import task from './task';
import rasterConfig from './rasterConfig';
import configRaster from './configRaster';
import delay from './delay';
import dashLength from './dashLength';
import selectedPixels from './selectedPixels';
import config from './config';

const reducerMap = {
    task,
    rasterConfig,
    configRaster: configRaster,
    delay,
    dashLength,
    selectedPixels,
    config
};

export const reducer = combineReducers(reducerMap);

export type State = ReturnType<typeof reducer>;

export default reducer;