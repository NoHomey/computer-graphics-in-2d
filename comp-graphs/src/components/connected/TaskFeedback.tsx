import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import taskState from '../../store/selectors/taskState';

interface Props {
    feedback: string
};

const Feedback: React.FC<Props> = ({ feedback }) => {
    return (
        <Chip variant="outlined" color="primary" label={feedback} />
    );
};

const TaskFeedback = connect(
    (state: State) => ({ feedback: taskState(state) }),
)(Feedback);

export default TaskFeedback;