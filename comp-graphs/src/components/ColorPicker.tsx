import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import Color from '../types/Color';
import colors from '../utility/colors';

interface Props {
    label: string
    selected: Color,
    removeColor1: Color,
    removeColor2: Color,
    onChange: (newColor: Color) => void
};

const useStyles = makeStyles({
    select: {
        color: (props: Props) => props.selected
    }
});

const ColorPicker: React.FC<Props> = props => {
    const classes = useStyles(props);
    const labelId = 'color-picker-' + props.label;

    return (
        <FormControl>
            <InputLabel id={labelId}>{props.label}</InputLabel>
            <Select
                classes={{
                    select: classes.select
                }}
                labelId={labelId}
                value={props.selected}
                onChange={handleChange(props.selected, props.onChange)}
            >
                {colors.filter(c => c !== props.removeColor1 && c !== props.removeColor2).map((color, index) => (
                    <MenuItem key={`${index}-${color}`}  value={color} style={{ color }}>{color}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ColorPicker;

function handleChange(color: Color, handler: (newColor: Color) => void) {
    return (event: { target: {value: unknown }}) => {
        const newColor = event.target.value as Color;
        if(newColor !== color){
            handler(newColor);
        }
    };
}