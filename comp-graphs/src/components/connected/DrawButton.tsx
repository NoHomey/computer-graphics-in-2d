import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import canDraw from '../../store/selectors/canDraw';
import disableConfig from '../../store/selectors/disableConfig';
import draw from '../../store/actions/Draw';

interface Props {
    canDraw: boolean,
    disabled: boolean,
    draw: () => void
};

const DrawButton: React.FC<Props> = ({ canDraw, draw, disabled }) => {
    return (
        <Button variant="contained" color="primary" disabled={!canDraw || disabled} onClick={draw}>
            Draw
        </Button>
    );
};

const Connected = connect(
    (state: State) => ({ canDraw: canDraw(state), disabled: disableConfig(state) }),
    { draw }
)(DrawButton);

export default Connected;