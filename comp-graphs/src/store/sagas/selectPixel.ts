import { takeEvery, select, put } from 'redux-saga/effects'
import { SelectPixel, SelectPixelAction } from '../actions/SelectPixel';
import selectedPixelsSelector from '../selectors/selectedPixels';
import SelectedPixels, { has } from '../../types/SelectedPixels';
import addPixelToSelected from '../actions/AddPixelToSelected';
import removePixelFromSelected from '../actions/RemovePixelFromSelected';

function* handleSelectPixelAction({ payload }: SelectPixelAction) {
    const pixel = payload;
    const selectedPixels: SelectedPixels = yield select(selectedPixelsSelector);
    const isSelected = has(selectedPixels, pixel);
    if(isSelected) {
        return yield put(removePixelFromSelected(pixel));
    } else if(selectedPixels.size < 2) {
        return yield put(addPixelToSelected(pixel));
    }
}

function* selectPixel() {
    yield takeEvery(SelectPixel, handleSelectPixelAction);
}

export default selectPixel;