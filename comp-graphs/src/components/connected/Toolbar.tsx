import React from 'react';
import MuiToolbar from '@material-ui/core/Toolbar';
import RasterConfig from './../RasterConfig';
import TaskConfig from './TaskConfig';
import { State } from '../../store/reducers/main';
import { connect } from 'react-redux';

interface Props {
    configRaster: boolean;
};

const Toolbar: React.FC<Props> = ({configRaster}) => (
    <MuiToolbar>
        {configRaster ? <RasterConfig /> : <TaskConfig />}
    </MuiToolbar>
);

const Connected = connect(
    ({ configRaster }: State) => ({ configRaster })
)(Toolbar);

export default Connected;