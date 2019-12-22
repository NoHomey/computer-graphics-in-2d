import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Props {
    label: string
    value: number,
    onChange: (newValue: number) => void
};

const counts = generateCounts().map((count, index) => <MenuItem value={count} key={index}>{count}</MenuItem>);

const PixelCount: React.FC<Props> = ({label, value, onChange}) => {
    const labelId = 'pixel-count-' + label;

    return (
        <FormControl>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                value={value}
                onChange={handleChange(value, onChange)}
            >
                {counts}
            </Select>
        </FormControl>
    );
};

export default PixelCount;

function generateCounts(): number[] {
    const counts = new Array(80 - 10 + 1);
    for(let i = 10; i <= 80; ++i) {
        counts[i - 10] = i;
    }
    return counts;
}

function handleChange(val: number, handler: (newVal: number) => void) {
    return (event: { target: {value: unknown }}) => {
        const newVal = event.target.value as number;
        if(newVal !== val){
            handler(newVal);
        }
    };
}