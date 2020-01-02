import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeConfig } from '../../store/actions/ChangeConfig';
import disableConfig from '../../store/selectors/disableConfig';
import { State } from '../../store/reducers/main';

interface Props {
    configRaster: boolean,
    disabled: boolean,
    changeConfig: () => void
}

const ChangeConfig: React.FC<Props> = props => (
    <Button
        color={props.configRaster ? "primary" : "secondary"}
        onClick={props.changeConfig}
        variant={props.configRaster ? "contained" : "outlined"}
        disabled={props.disabled}>
        {props.configRaster ? "Next" : "Back"}
    </Button>
);

const Connected = connect(
    (state: State) => ({ disabled: disableConfig(state) }),
    { changeConfig }
)(ChangeConfig);

export default Connected;