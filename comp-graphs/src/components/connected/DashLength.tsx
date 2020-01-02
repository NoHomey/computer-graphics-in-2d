import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import { setDashLength } from '../../store/actions/SetDashLength';
import disableConfig from '../../store/selectors/disableConfig';
import dashLength from '../../store/selectors/dashLength';

interface Props {
    dashLength: number,
    disabled: boolean,
    onDelayChange: (dashLength: number) => void
};

const options
= [1, 2, 3, 4, 5]
.map(
length => (<MenuItem key={length} value={length}>{`${length} pixels`}</MenuItem>)
);

const DashLengthSelect: React.FC<Props> = props => {
    return (
        <FormControl>
            <InputLabel id="dash-length">{"Dash"}</InputLabel>
            <Select
                labelId="dash-length"
                value={props.dashLength}
                disabled={props.disabled}
                onChange={handleChange(props.dashLength, props.onDelayChange)}
            >
                {options}
            </Select>
        </FormControl>
    );
};

function handleChange(dashLength: number, handler: (newDashLength: number) => void) {
    return (event: { target: {value: unknown }}) => {
        const newDashLength = event.target.value as number;
        if(newDashLength !== dashLength){
            handler(newDashLength);
        }
    };
}

const Connected = connect(
    (state: State) => ({ dashLength: dashLength(state), disabled: disableConfig(state) }),
    { onDelayChange: setDashLength }
)(DashLengthSelect);

export default Connected;