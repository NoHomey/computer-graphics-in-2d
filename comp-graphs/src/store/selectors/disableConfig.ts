import { State } from '../reducers/main';

function disableConfig(state: State): boolean {
    return !state.config;
}

export default disableConfig;