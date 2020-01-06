import { SetPointerWidth, SetPointerWidthAction } from '../actions/SetPointerWidth';
import Action from './Action';

function dashLength(state: number = 1, action: Action | SetPointerWidthAction): number {
    switch(action.type) {
        case SetPointerWidth:
            return (action as SetPointerWidthAction).payload.pointerWidth;
        default: return state;
    }
}

export default dashLength;