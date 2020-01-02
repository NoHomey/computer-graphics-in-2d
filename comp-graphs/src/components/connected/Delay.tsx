import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/main';
import { setDelay } from '../../store/actions/SetDelay';
import disableConfig from '../../store/selectors/disableConfig';
import delay from '../../store/selectors/delay';

interface Props {
    delay: number,
    disabled: boolean,
    onDelayChange: (delay: number) => void
};

const options
= [100, 200, 300, 500, 700, 800, 1000, 1200, 1500]
.map(
delay => (<MenuItem key={delay} value={delay}>
    {delay < 1000 ? `${delay} ms` : `${delay / 1000} sec` }
</MenuItem>)
);

const DelaySelect: React.FC<Props> = props => {
    return (
        <FormControl>
            <InputLabel id="delay">{"Delay"}</InputLabel>
            <Select
                labelId="delay"
                value={props.delay}
                disabled={props.disabled}
                onChange={handleChange(props.delay, props.onDelayChange)}
            >
                {options}
            </Select>
        </FormControl>
    );
};

function handleChange(delay: number, handler: (newDelay: number) => void) {
    return (event: { target: {value: unknown }}) => {
        const newDelay = event.target.value as number;
        if(newDelay !== delay){
            handler(newDelay);
        }
    };
}

const Connected = connect(
    (state: State) => ({ delay: delay(state), disabled: disableConfig(state) }),
    { onDelayChange: setDelay }
)(DelaySelect);

export default Connected;