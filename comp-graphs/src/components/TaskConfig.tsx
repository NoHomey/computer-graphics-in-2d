import React from 'react';
import Grid from '@material-ui/core/Grid';
import Task from './connected/Task';
import ChangeConfig from './connected/ChangeConfig';
import Delay from './connected/Delay';
import DashLength from './connected/DashLength';
import TaskFeedback from './connected/TaskFeedback';
import DrawButton from './connected/DrawButton';
import ClearButton from './connected/ClearButton';

const TaskConfig: React.FC = () => (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
        <Grid item><ChangeConfig configRaster={false}/></Grid>
        <Grid item><Task/></Grid>
        <Grid item><Delay/></Grid>
        <Grid item><DashLength/></Grid>
        <Grid item><TaskFeedback /></Grid>
        <Grid item><DrawButton /></Grid>
        <Grid item><ClearButton /></Grid>
    </Grid>
);

export default TaskConfig;