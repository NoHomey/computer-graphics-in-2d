import { State } from '../reducers/main';
import Task from '../../types/Task';

function task(state: State): Task {
    return state.task;
}

export default task;