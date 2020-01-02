import { ChangeConfig, ChangeConfigAction } from '../actions/ChangeConfig';
import Action from './Action';

function configRaster(
    state: boolean = true,
    action: Action | ChangeConfigAction
): boolean {
    switch(action.type) {
        case ChangeConfig: return !state;
        default: return state;
    }
}

export default configRaster;