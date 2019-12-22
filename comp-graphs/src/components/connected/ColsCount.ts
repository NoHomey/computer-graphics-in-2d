import { connect } from 'react-redux';
import PixelCount from '../PixelCount';
import { State } from '../../store/reducers/main';
import { setRasterDisplayCols } from '../../store/actions/SetRasterDisplayCols';

const ColsCount = connect(
    (state: State) => ({
        label: 'Cols',
        value: state.rasterDisplay.cols
    }),
    { onChange: setRasterDisplayCols }
)(PixelCount);

export default ColsCount;