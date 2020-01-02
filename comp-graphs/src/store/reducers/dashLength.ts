import { SetDashLength, SetDashLengthAction } from '../actions/SetDashLength';
import Action from './Action';

function dashLength(state: number = 1, action: Action | SetDashLengthAction): number {
    switch(action.type) {
        case SetDashLength:
            return (action as SetDashLengthAction).payload.dashLength;
        default: return state;
    }
}

export default dashLength;