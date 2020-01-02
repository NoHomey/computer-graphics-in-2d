import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import disableConfig from '../../store/selectors/disableConfig';
import clearRasterDisplay from '../../store/actions/ClearRasterDisplay';

interface Props {
    disabled: boolean,
    clear: () => void
};

const ClearButton: React.FC<Props> = ({ disabled, clear }) => {
    return (
        <Button variant="outlined" color="secondary" disabled={disabled} onClick={clear}>
            Clear
        </Button>
    );
};

const Connected = connect(
    (state: State) => ({ disabled: disableConfig(state) }),
    { clear: clearRasterDisplay }
)(ClearButton);

export default Connected;