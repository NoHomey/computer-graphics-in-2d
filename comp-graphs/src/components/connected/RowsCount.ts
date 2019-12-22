import { connect } from 'react-redux';
import PixelCount from '../PixelCount';
import { State } from '../../store/reducers/main';
import { setRasterDisplayRows } from '../../store/actions/SetRasterDisplayRows';

const RowsCount = connect(
    (state: State) => ({
        label: 'Rows',
        value: state.rasterDisplay.rows
    }),
    { onChange: setRasterDisplayRows }
)(PixelCount);

export default RowsCount;