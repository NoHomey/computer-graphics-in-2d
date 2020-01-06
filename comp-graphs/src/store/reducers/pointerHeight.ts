import { SetPointerHeight, SetPointerHeightAction } from '../actions/SetPointerHeight';
import Action from './Action';

function dashLength(state: number = 1, action: Action | SetPointerHeightAction): number {
    switch(action.type) {
        case SetPointerHeight:
            return (action as SetPointerHeightAction).payload.pointerHeight;
        default: return state;
    }
}

export default dashLength;