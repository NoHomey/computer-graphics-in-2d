import { SetPixelColor, SetPixelColorAction } from '../actions/SetPixelColor';
import Action from './Action';
import ColorMap from '../../types/ColorMap';
import PixelKind from '../../types/PixelKind';
import Color from '../../types/Color';

const defaultColorMap: ColorMap = {
    [PixelKind.Background]: Color.Green,
    [PixelKind.Fill]: Color.Blue,
    [PixelKind.Contour]: Color.Red
}

function pixelColor(
    state: ColorMap = defaultColorMap,
    action: Action | SetPixelColorAction
): ColorMap {
    switch(action.type) {
        case SetPixelColor:
            return setColor(state, (action as SetPixelColorAction).payload);
        default: return state
    }
}

export default pixelColor;

function setColor(colorMap: ColorMap, payload: SetPixelColorAction['payload']): ColorMap {
    return { ...colorMap, [payload.pixelKind] : payload.color };
}