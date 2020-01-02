import { SetTask, SetTaskAction } from '../actions/SetTask';
import Action from './Action';
import Task from '../../types/Task';

const defaultTask: Task = Task.Task1;

function task(
    state: Task = defaultTask,
    action: Action | SetTaskAction
): Task {
    switch(action.type) {
        case SetTask:
            return (action as SetTaskAction).payload.task;
        default: return state;
    }
}

export default task;