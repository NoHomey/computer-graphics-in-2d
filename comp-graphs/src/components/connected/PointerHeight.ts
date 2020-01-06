import { connect } from 'react-redux';
import PointerDimention from '../PointerDimention';
import { State } from '../../store/reducers/main';
import setPointerHeight from '../../store/actions/SetPointerHeight';
import pointerHeight from '../../store/selectors/pointerHeight';

const PointerHeight = connect(
    (state: State) => ({
        label: 'Height',
        value: pointerHeight(state)
    }),
    { onChange: setPointerHeight }
)(PointerDimention);

export default PointerHeight;