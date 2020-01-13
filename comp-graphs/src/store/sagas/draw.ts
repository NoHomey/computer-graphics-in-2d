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
import pointerWidthSelector from '../selectors/pointerWidth';
import pointerHeightSelector from '../selectors/pointerHeight';
import pixelKindSelector from '../selectors/pixelKind';
import Pixel from '../../types/Pixel';

function* handleDrawAction() {
    const selected: SelectedPixels = yield select(selectedPixelsSelector);
    const delayMS: number = yield select(delaySelector);
    const task: Task = yield select(taskSelector);
    const entries = selected.toArray();
    const x1 = entries[0].get(0) as number;
    const y1 = entries[0].get(1) as number;
    const x2 = entries[1].get(0) as number;
    const y2 = entries[1].get(1) as number;
    yield put(disableConfig());
    if(task !== Task.Task3) {
        yield call(task === Task.Task1 ? drawTask1 : drawTask2, delayMS, x1, y1, x2, y2);
    } else {
        const a = entries[2].get(0) as number;
        const b = entries[2].get(1) as number;
        const c = entries[3].get(0) as number;
        const d = entries[3].get(1) as number;
        yield call(drawTask3, delayMS, x1, y1, x2, y2, a, b, c, d);
    }
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
    const pointerWidth = yield select(pointerWidthSelector);
    const pointerHeight = yield select(pointerHeightSelector);
    const point = circlePixelDrawer(delayMS, pointerWidth, pointerHeight);
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
    yield point(xc, yc + r);
    yield delay(delayMS);
    yield point(xc, yc - r);
    yield delay(delayMS);
    yield point(xc + r, yc);
    yield delay(delayMS);
    yield point(xc - r, yc);
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
        };
        yield point(xc + x, yc + y);
        yield point(xc + x, yc - y);
        yield point(xc - x, yc + y);
        yield point(xc - x, yc - y);
    }
}

function* drawTask3(delayMS: number, x1: number, y1: number, x2: number, y2: number, a: number, b: number, c: number, d: number) {
    yield drawLine({ x: x1, y: y1 }, { x: x2, y: y2 }, delayMS, PixelKind.Fill);
    const xl = Math.min(a, c);
    const xr = Math.max(a, c);
    const yb = Math.min(b, d);
    const yt = Math.max(b, d);
    yield drawRectangle(xl, xr, yb, yt, delayMS);
    yield liangBarsky(delayMS, x1, y1, x2, y2, xl, xr, yb, yt);
}

function circlePixelDrawer(delayMS: number, width: number, height: number) {
    const xc = Math.floor(width / 2);
    const yc = Math.floor(height / 2);
    return function* drawPoint(x: number, y: number) {
        for(let i = 0; i < width; ++i) {
            for(let j = 0; j < height; ++j) {
                const px = x - xc + i;
                const py = y - yc + j;
                const pixel: Pixel = { x: px, y: py };
                const kind: PixelKind = yield select(pixelKindSelector, pixel);
                let newKind: PixelKind = PixelKind.Fill;
                if(kind !== PixelKind.Background) {
                    newKind = PixelKind.Contrast;
                }
                if((i === xc && j === yc) || kind === PixelKind.Contour) {
                    newKind = PixelKind.Contour;
                }
                yield delay(delayMS);
                yield put(setKindToPixel(pixel, newKind));
            }
        }
    }
}

function* drawLine(
    { x: x1, y: y1 } : Pixel,
    { x: x2, y: y2 }: Pixel,
    delayMS: number,
    pixelKind: PixelKind
) {
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
    for(let i = 0; i <= dx; ++i) {
        yield delay(delayMS);
        if(reverse) {
            yield put(setKindToPixel({ x: y, y: x }, pixelKind));
        } else {
            yield put(setKindToPixel({ x, y }, pixelKind));
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

function* drawRectangle(xl: number, xr: number, yb: number, yt: number, delayMS: number) {
    for(let x = xl; x <= xr; ++x) {
        yield put(setKindToPixel({ x, y: yb }, PixelKind.Contour));
    }
    yield delay(delayMS);
    for(let y = yb; y <= yt; ++y) {
        yield put(setKindToPixel({ x: xr, y }, PixelKind.Contour));
    }
    yield delay(delayMS);
    for(let x = xr; x >= xl; --x) {
        yield put(setKindToPixel({ x, y: yt }, PixelKind.Contour));
    }
    yield delay(delayMS);
    for(let y = yt; y >= yb; --y) {
        yield put(setKindToPixel({ x: xl, y }, PixelKind.Contour));
    }
}

function clipt(p: number, q: number, t_in: number, t_out: number): { visible: boolean, t_in: number, t_out: number } {
    let visible = true;
    if(p < 0) {
        const t = q / p;
        if(t > t_out) {
            visible = false;
        } else if(t > t_in) {
            t_in = t;
        }
    } else {
        if(p > 0) {
            const t = q / p;
            if(t < t_in) {
                visible = false;
            } else if(t < t_out) {
                t_out = t;
            }
        } else if(q < 0) {
         visible = false;
        }
    }
    return { visible, t_in, t_out };
}

function* liangBarsky(delayMS: number, x1: number, y1: number, x2: number, y2: number, xl: number, xr: number, yb: number, yt: number) {
    let t_in = 0;
    let t_out = 1;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const c1 = clipt(-dx, x1 - xl, t_in, t_out);
    if(c1.visible) {
        const c2 = clipt(dx, xr - x1, c1.t_in, c1.t_out);
        if(c2.visible) {
            const c3 = clipt(-dy, y1 - yb, c2.t_in, c2.t_out);
            if(c3.visible) {
                const c4 = clipt(dy, yt - y1, c3.t_in, c3.t_out); 
                if(c4.visible) {
                    if(c4.t_out < 1) {
                        x2 = Math.floor(x1 + c4.t_out * dx);
                        y2 = Math.floor(y1 + c4.t_out * dy);
                    }
                    if(c4.t_in > 0) {
                        x1 = Math.floor(x1 + c4.t_in * dx);
                        y1 = Math.floor(y1 + c4.t_in * dy);
                    }
                    yield drawLine({ x: x1, y: y1 }, { x: x2, y: y2 }, delayMS, PixelKind.Contrast);
                }
            }
        }
    }
}