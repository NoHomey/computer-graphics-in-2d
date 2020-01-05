import { takeEvery, select, put, delay, call } from 'redux-saga/effects'
import { Draw } from '../actions/Draw';
import PixelKind from '../../types/PixelKind';
import Task from '../../types/Task';
import SelectedPixels from '../../types/SelectedPixels';
import setKindToPixel from '../actions/SetKindToPixel';
import disableConfig from '../actions/DisableConfig';
import enableConfig from '../actions/EnableConfig';
import selectedPixelsSelector from '../selectors/selectedPixels';
import delaySelector from '../selectors/delay';
import dashLengthSelector from '../selectors/dashLength';
import taskSelector from '../selectors/task';

function* handleDrawAction() {
    const selected: SelectedPixels = yield select(selectedPixelsSelector);
    const delayMS: number = yield select(delaySelector);
    const task: Task = yield select(taskSelector);
    const entries = selected.toArray();
    let x1 = entries[0].get(0) as number;
    let y1 = entries[0].get(1) as number;
    let x2 = entries[1].get(0) as number;
    let y2 = entries[1].get(1) as number;
    yield put(disableConfig());
    yield call(task === Task.Task1 ? drawTask1 : drawTask2, delayMS, x1, y1, x2, y2);
    yield put(enableConfig());
}

function* draw() {
    yield takeEvery(Draw, handleDrawAction);
}

export default draw;

function* drawTask1(delayMS: number, x1: number, y1: number, x2: number, y2: number) {
    const dashLength: number = yield select(dashLengthSelector);
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
}

function* drawTask2(delayMS: number, x1: number, y1: number, x2: number, y2: number) {
    yield put(setKindToPixel({ x: x1, y: y1 }, PixelKind.Background));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: x2, y: y2 }, PixelKind.Background));
    yield delay(delayMS);
    const xc = x1;
    const yc = y1;
    const xr = x2 - x1;
    const yr = y2 - y1;
    const r = Math.floor(Math.sqrt((xr * xr) + (yr * yr)) + 0.5);
    let x = 0;
    let y = r;
    let d = 2 - 2 * r;
    yield put(setKindToPixel({ x: xc, y: yc + r }, PixelKind.Contour));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc, y: yc - r }, PixelKind.Contour));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc + r, y: yc }, PixelKind.Contour));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc - r, y: yc }, PixelKind.Contour));
    while(true) {
        if(d > - y) {
            --y;
            d += 1 - 2 * y;
        }
        if(d <= x) {
            ++x;
            d += 1 + 2 * x;
        }
        if(y < 0) {
            return;
        }
        yield fourSymetric(delayMS, xc, yc, x, y);
    }
}

function* fourSymetric(delayMS: number, xc: number, yc: number, x: number, y: number) {
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc + x, y: yc + y }, PixelKind.Contour));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc - x, y: yc - y }, PixelKind.Contour));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc - x, y: yc + y }, PixelKind.Contour));
    yield delay(delayMS);
    yield put(setKindToPixel({ x: xc + x, y: yc - y }, PixelKind.Contour));
}