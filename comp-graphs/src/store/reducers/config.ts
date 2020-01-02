import { EnableConfig, EnableConfigAction } from '../actions/EnableConfig';
import { DisableConfig, DisableConfigAction } from '../actions/DisableConfig';
import Action from './Action';

function config(
    state: boolean = true,
    action: Action | EnableConfigAction | DisableConfigAction
): boolean {
    switch(action.type) {
        case EnableConfig: return true;
        case DisableConfig: return false;
        default: return state;
    }
}

export default config;