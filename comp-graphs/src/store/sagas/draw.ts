import { takeEvery, select, put, delay } from 'redux-saga/effects'
import { Draw } from '../actions/Draw';
import PixelKind from '../../types/PixelKind';
import SelectedPixels from '../../types/SelectedPixels';
import setKindToPixel from '../actions/SetKindToPixel';
import disableConfig from '../actions/DisableConfig';
import enableConfig from '../actions/EnableConfig';
import selectedPixelsSelector from '../selectors/selectedPixels';
import delaySelector from '../selectors/delay';
import dashLengthSelector from '../selectors/dashLength';

function* handleDrawAction() {
    const selected: SelectedPixels = yield select(selectedPixelsSelector);
    const delayMS: number = yield select(delaySelector);
    const dashLength: number = yield select(dashLengthSelector);
    const entries = selected.toArray();
    let x1 = entries[0].get(0) as number;
    let y1 = entries[0].get(1) as number;
    let x2 = entries[1].get(0) as number;
    let y2 = entries[1].get(1) as number;
    yield put(disableConfig());
    yield put(setKindToPixel({ x: x1, y: y1 }, PixelKind.Background));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: x2, y: y2 }, PixelKind.Background));
    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);
    const reverse = dx < dy;
    if(reverse) {
        let tmp = x1;
        x1 = y1;
        y1 = tmp;
        tmp = x2;
        x2 = y2;
        y2 = tmp;
        tmp = dx;
        dx = dy;
        dy = tmp;
    }
    const incUP = (-2) * dx + 2 * dy;
    const incDN = 2 * dy;
    const incX = x1 <= x2 ? 1 : -1;
    const incY = y1 <= y2 ? 1 : -1;
    let d = -dx + 2 * dy;
    let x = x1;
    let y = y1;
    let dashCounter = 0;
    let skip = false;
    for(let i = 0; i <= dx; ++i) {
        if(!skip) {
            yield delay(delayMS);
            if(reverse) {
                yield put(setKindToPixel({ x: y, y: x }, PixelKind.Contour));
            } else {
                yield put(setKindToPixel({ x, y }, PixelKind.Contour));
            }
        }
        ++dashCounter;
        if(dashCounter === dashLength) {
            skip = !skip;
            dashCounter = 0;        
        }
        x += incX;
        if(d > 0) {
            d += incUP;
            y += incY;
        } else {
            d += incDN;
        }
    }
    yield put(enableConfig());
}

function* draw() {
    yield takeEvery(Draw, handleDrawAction);
}

export default draw;