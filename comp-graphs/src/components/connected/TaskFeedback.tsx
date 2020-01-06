import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import taskState from '../../store/selectors/taskState';
import disableConfig from '../../store/selectors/disableConfig';

interface Props {
    feedback: string,
    disable: boolean
};

const Feedback: React.FC<Props> = ({ feedback, disable }) => {
    return (
        <Chip variant="outlined" color={disable ? "inherit" : "primary"} label={feedback} />
    );
};

const TaskFeedback = connect(
    (state: State) => ({ feedback: taskState(state), disable: disableConfig(state) }),
)(Feedback);

export default TaskFeedback;