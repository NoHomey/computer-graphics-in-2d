import { connect } from 'react-redux';
import PointerDimention from '../PointerDimention';
import { State } from '../../store/reducers/main';
import setPointerWidth from '../../store/actions/SetPointerWidth';
import pointerWidth from '../../store/selectors/pointerWidth';
import disableConfig from '../../store/selectors/disableConfig';

const PointerWidth = connect(
    (state: State) => ({
        label: 'Width',
        disabled: disableConfig(state),
        value: pointerWidth(state)
    }),
    { onChange: setPointerWidth }
)(PointerDimention);

export default PointerWidth;