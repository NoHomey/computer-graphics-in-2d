import { State } from '../reducers/main';

function delay(state: State): number {
    return state.delay;
}

export default delay;