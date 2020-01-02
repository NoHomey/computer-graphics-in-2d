import Task from '../../types/Task';

export const SetTask = 'set-task';

export interface SetTaskAction {
    type: typeof SetTask,
    payload: {
        task: Task
    }
};

export function setTask(task: Task): SetTaskAction {
    return {
        type: SetTask,
        payload: { task }
    };
};

export default setTask;