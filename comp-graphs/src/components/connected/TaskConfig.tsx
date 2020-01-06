import React from 'react';
import Grid from '@material-ui/core/Grid';
import Task from './Task';
import TaskEnum from '../../types/Task';
import ChangeConfig from './ChangeConfig';
import Delay from './Delay';
import DashLength from './DashLength';
import PointerWidth from './PointerWidth';
import PointerHeight from './PointerHeight';
import TaskFeedback from './TaskFeedback';
import DrawButton from './DrawButton';
import ClearButton from './ClearButton';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import task from '../../store/selectors/task';

interface Props {
    task: TaskEnum
}

const TaskConfig: React.FC<Props> = ({task}) => (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
        <Grid item><ChangeConfig configRaster={false}/></Grid>
        <Grid item><Task/></Grid>
        <Grid item><Delay/></Grid>
        {task === TaskEnum.Task1 ? <Grid item><DashLength/></Grid> : null}
        {task === TaskEnum.Task2 ? <Grid item><PointerHeight/></Grid> : null}
        {task === TaskEnum.Task2 ? <Grid item><PointerWidth/></Grid> : null}
        <Grid item><TaskFeedback /></Grid>
        <Grid item><DrawButton /></Grid>
        <Grid item><ClearButton /></Grid>
    </Grid>
);

const Connected = connect(
    (state: State) => ({ task: task(state) }),
)(TaskConfig);

export default Connected;