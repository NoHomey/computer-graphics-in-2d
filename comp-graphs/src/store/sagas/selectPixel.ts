import { takeEvery, select, put } from 'redux-saga/effects'
import { SelectPixel, SelectPixelAction } from '../actions/SelectPixel';
import selectedPixelsSelector from '../selectors/selectedPixels';
import taskSelector from '../selectors/task';
import SelectedPixels, { has } from '../../types/SelectedPixels';
import addPixelToSelected from '../actions/AddPixelToSelected';
import removePixelFromSelected from '../actions/RemovePixelFromSelected';
import Task from '../../types/Task';
import Pixel from '../../types/Pixel';
import PixelKind from '../../types/PixelKind';

function* selectPixelForTask1or2(pixel: Pixel, count: number) {
    if(count < 2) {
        return yield put(addPixelToSelected(pixel));
    }
}

function* selectPixelForTask3(pixel: Pixel, count: number) {
    if(count < 2) {
        return yield put(addPixelToSelected(pixel, PixelKind.Fill));
    }
    if(count < 4) {
        return yield put(addPixelToSelected(pixel, PixelKind.Contour));
    }
}

const selector = {
    [Task.Task1]: selectPixelForTask1or2,
    [Task.Task2]: selectPixelForTask1or2,
    [Task.Task3]: selectPixelForTask3
}

function* handleSelectPixelAction({ payload }: SelectPixelAction) {
    const pixel = payload;
    const selectedPixels: SelectedPixels = yield select(selectedPixelsSelector);
    const task: Task = yield select(taskSelector);
    const isSelected = has(selectedPixels, pixel);
    const count = selectedPixels.size;
    if(isSelected) {
        return yield put(removePixelFromSelected(pixel));
    } else {
        return yield selector[task](pixel, count);
    }
}

function* selectPixel() {
    yield takeEvery(SelectPixel, handleSelectPixelAction);
}

export default selectPixel;