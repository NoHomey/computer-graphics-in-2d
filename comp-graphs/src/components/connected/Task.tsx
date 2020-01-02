import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Task from '../../types/Task';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import { setTask } from '../../store/actions/SetTask';
import disableConfig from '../../store/selectors/disableConfig';
import task from '../../store/selectors/task';

interface Props {
    task: Task,
    disabled: boolean,
    onTaskChange: (task: Task) => void
};

const TaskSelect: React.FC<Props> = props => {
    return (
        <FormControl>
            <InputLabel id="task">{"Task"}</InputLabel>
            <Select
                labelId="task"
                value={props.task}
                disabled={props.disabled}
                onChange={handleChange(props.task, props.onTaskChange)}
            >
                <MenuItem value={Task.Task1}>{"Task 1"}</MenuItem>
                <MenuItem value={Task.Task2}>{"Task 2"}</MenuItem>
            </Select>
        </FormControl>
    );
};

function handleChange(task: Task, handler: (newTask: Task) => void) {
    return (event: { target: {value: unknown }}) => {
        const newTask = event.target.value as Task;
        if(newTask !== task){
            handler(newTask);
        }
    };
}

const Connected = connect(
    (state: State) => ({ task: task(state), disabled: disableConfig(state) }),
    { onTaskChange: setTask }
)(TaskSelect);

export default Connected;