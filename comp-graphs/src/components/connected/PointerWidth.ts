import { connect } from 'react-redux';
import PointerDimention from '../PointerDimention';
import { State } from '../../store/reducers/main';
import setPointerWidth from '../../store/actions/SetPointerWidth';
import pointerWidth from '../../store/selectors/pointerWidth';

const PointerWidth = connect(
    (state: State) => ({
        label: 'Width',
        value: pointerWidth(state)
    }),
    { onChange: setPointerWidth }
)(PointerDimention);

export default PointerWidth;