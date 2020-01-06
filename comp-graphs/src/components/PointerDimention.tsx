import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Props {
    label: string
    value: number,
    disabled: boolean,
    onChange: (newValue: number) => void
};

const counts = [1, 2, 3, 4, 5].map((count, index) => <MenuItem value={count} key={index}>{count}</MenuItem>);

const PointerDimention: React.FC<Props> = ({label, value, disabled, onChange}) => {
    const labelId = 'pointer-' + label;

    return (
        <FormControl>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                value={value}
                disabled={disabled}
                onChange={handleChange(value, onChange)}
            >
                {counts}
            </Select>
        </FormControl>
    );
};

export default PointerDimention;

function handleChange(val: number, handler: (newVal: number) => void) {
    return (event: { target: {value: unknown }}) => {
        const newVal = event.target.value as number;
        if(newVal !== val){
            handler(newVal);
        }
    };
}