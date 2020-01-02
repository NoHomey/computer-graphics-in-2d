import { all } from 'redux-saga/effects';
import selectPixel from './selectPixel';
import draw from './draw';

function* root() {
    yield all([selectPixel(), draw()]);
}

export default root;