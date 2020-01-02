import { SetDelay, SetDelayAction } from '../actions/SetDelay';
import Action from './Action';

function delay(state: number = 300, action: Action | SetDelayAction): number {
    switch(action.type) {
        case SetDelay:
            return (action as SetDelayAction).payload.delay;
        default: return state;
    }
}

export default delay;